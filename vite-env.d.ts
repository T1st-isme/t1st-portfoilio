interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_USER_ID: string;
    // add more environment variables here if needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
