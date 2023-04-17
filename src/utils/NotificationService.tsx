import { mui } from "../assets"

export class NotificationService {
    private static instance: NotificationService

    public static getInstance(): NotificationService {
        if (!NotificationService.instance) {
            NotificationService.instance = new NotificationService()
        }
        return NotificationService.instance
    }

    public notify(
        message: string,
        type: mui.AlertProps["severity"],
        title?: string
    ) {
        return <mui.Snackbar
            title={title}
            autoHideDuration={5000}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
        >
            <mui.Alert severity={type}>{message}</mui.Alert>
        </mui.Snackbar>
    }
}