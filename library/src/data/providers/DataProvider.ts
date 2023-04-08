import {
    action,
    observable,
    IObservableArray,
    IObservableObject,
    ObservableMap,
    onBecomeObserved,
    onBecomeUnobserved,
    isObservableArray,
    isObservableMap,
    isObservableObject,
    runInAction
} from "mobx"

export type ObservableData = IObservableObject | IObservableArray | ObservableMap

export abstract class DataProvider<TData extends ObservableData, TOptions = {}> {

    @observable public data: TData
    @observable public loading: boolean
    public readonly name: string
    public readonly options?: TOptions

    private timeoutId: number
    private _running: boolean

    constructor(name: string, options?: TOptions) {
        this.name = name

        Object.defineProperty(this, "options", {
            value: Object.freeze(options),
            enumerable: true,
            configurable: false,
            writable: false
        })

        this.loading = false
        this._running = false
        this.timeoutId = 0

        const data = this.setInitialData()
        if (!isObservableObject(data) &&
            !isObservableArray(data) &&
            !isObservableMap(data)) {
            throw new Error(`${name}.setInitialData(): use empty collection instead null as initial data`)
        }

        this.data = data
        onBecomeObserved(this, "data", this.load)
        onBecomeUnobserved(this, "data", this.unload)
    }

    public get running(): boolean {
        return this._running
    }

    @action.bound
    public load(): void {
        // start fetching outside the current stack,
        // because it will be triggered by an observable
        this._running = true
        clearTimeout(this.timeoutId)
        this.timeoutId = setTimeout(async () => {
            this.setLoading(true)
            this.providerWillLoad()

            try {
                await this.fetch()
            } catch (err) {
                console.error(`${this.name}.load(): `, err)
            } finally {
                runInAction(() => {
                    this.setLoading(false)
                    this.providerDidLoad()
                })
            }
        }, 0) as unknown as number
    }

    @action.bound
    public unload(): void {
        this._running = false
        clearTimeout(this.timeoutId)
        this.providerWillUnload()
        this.setLoading(false)
    }

    public setOptions(options: Partial<TOptions>): this {
        throw new Error("Method not implemented!")
    }

    protected abstract setInitialData(): TData

    protected abstract fetch(): Promise<void>

    protected providerWillLoad(): void {
        // do nothing
    }

    protected providerWillUnload(): void {
        // do nothing
    }

    protected providerDidLoad(): void {
        // do nothing
    }

    @action
    protected setLoading(value: boolean): void {
        this.loading = value
    }
}