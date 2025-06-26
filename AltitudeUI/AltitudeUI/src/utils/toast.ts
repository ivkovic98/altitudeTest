import toast from 'react-hot-toast';

export const toastService = {
    success: (message: string) => {
        toast.success(message);
    },

    error: (message: string) => {
        toast.error(message);
    },

    info: (message: string) => {
        toast(message, {
            icon: 'ℹ️',
            style: {
                border: '1px solid #4F88FF',
            },
        });
    },

    warning: (message: string) => {
        toast(message, {
            icon: '⚠️',
            style: {
                border: '1px solid #F59E0B',
                background: '#FEF3C7',
                color: '#92400E',
            },
        });
    },

    loading: (message: string) => {
        return toast.loading(message);
    },

    promise: <T>(
        promise: Promise<T>,
        messages: {
            loading: string;
            success: string;
            error: string;
        }
    ) => {
        return toast.promise(promise, messages);
    },

    dismiss: (toastId?: string) => {
        toast.dismiss(toastId);
    },

    dismissAll: () => {
        toast.dismiss();
    },

    custom: (message: string, options?: any) => {
        toast(message, options);
    },
};

export const { success, error, info, warning, loading } = toastService;

export default toastService; 