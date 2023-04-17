import { NotificationService } from "./NotificationService"

describe("NotificationService", () => {
    it("has one instance", () => {
        expect(NotificationService.getInstance()).toEqual(NotificationService.getInstance())
    })
})