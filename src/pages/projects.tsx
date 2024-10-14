import { ProjectCard } from "@/components/cards";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Projects</h1>
          <br />
          <br />
          <br />
          <ProjectCard
            title="aslr-cop"
            repo="Hauser/aslr-cop"
            language="Rust"
            description="Quick check of ASLR violations"
          />
          <br />
          <ProjectCard
            title="NLGM"
            repo="Hauser/NLGM"
            language="JavaScript+Electron"
            description="EE diploma thesis"
          />
          <br />
          <ProjectCard
            title="autoc"
            repo="Hauser/autoc"
            language="JavaScript"
            description="Autocorrelation algorithm"
            preview="https://raw.githubusercontent.com/Hauser/autoc/refs/heads/master/example.gif"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
