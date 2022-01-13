import Link from "next/link";

const FooterSocialLink = ({
  children,
  href = "",
  className = "",
  download = false,
}) => {
  return (
    <div className={className}>
      <Link href={href}>
        <a
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noreferrer"
          download={download}
          className={`footer-social-link d-flex align-items-center justify-content-center`}
        >
          <>{children}</>
        </a>
      </Link>
    </div>
  );
};

export default FooterSocialLink;
