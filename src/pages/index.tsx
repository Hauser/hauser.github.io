import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "violet" })}>Software engineering</span>
          <br />
          <span className={title()}>
            by
          </span>
          <br />
          <span className={title({ color: "blue" })}>
            Thomas Hauser
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            C# C++ JavaScript TypeScript PHP Rust
          </div>
        </div>
        <div className="flex gap-3">
          {/* <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/projects"
          >
            Projects
          </Link> */}
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
