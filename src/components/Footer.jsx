import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import config from "../config";

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-700 text-black dark:text-white p-4 flex flex-col items-center gap-2 border-t border-gray-300 dark:border-gray-900">
            <p className="text-sm text-center">
                &copy; {new Date().getFullYear()} {config.siteTitle}.{" "}
                {config.tagline}
            </p>
        </footer>
    );
}

export default Footer;
