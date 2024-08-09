import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert } from "@mui/material";
import "./contact.css";

const Contact = () => {
    const [open, setOpen] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    setOpen(true);
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id="contact" className="contact-container">
            <div className="contact-wrapper">
                <div className="contact-title">Contact</div>
                <div className="contact-desc">
                    Feel free to reach out to me for any questions or
                    opportunities!
                </div>
                <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="contact-form"
                >
                    <div className="contact-form-title">Email Me 🚀</div>
                    <input
                        placeholder="Your Email"
                        name="from_email"
                        className="contact-input"
                    />
                    <input
                        placeholder="Your Name"
                        name="from_name"
                        className="contact-input"
                    />
                    <input
                        placeholder="Subject"
                        name="subject"
                        className="contact-input"
                    />
                    <textarea
                        placeholder="Message"
                        rows={4}
                        name="message"
                        className="contact-input-message"
                    />
                    <input
                        type="submit"
                        value="Send"
                        className="contact-button"
                    />
                </form>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                >
                    <Alert onClose={() => setOpen(false)} severity="success">
                        Email sent successfully!
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
};

export default Contact;
