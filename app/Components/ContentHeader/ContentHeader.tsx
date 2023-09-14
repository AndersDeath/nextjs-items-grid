import React from "react";
import "./ContentHeader.scss";

interface ContentHeaderProps {
  title: string;
  subtitle: string;
  buttonText: string;
  reload: () => void;
}

const ContentHeader = ({
  title,
  subtitle,
  buttonText,
  reload,
  ...props
}: ContentHeaderProps) => {
  return (
    <section className="ContentHeader">
      <div className="ContentHeader-title">{title}</div>
      <div className="ContentHeader-search-result">{subtitle}</div>
      <div
        className="ContentHeader-reload"
        aria-describedby={buttonText}
        onClick={reload}
      >
        {buttonText}
      </div>
    </section>
  );
};

export { ContentHeader };
