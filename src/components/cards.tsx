import { Card, CardBody, CardHeader } from "@nextui-org/card";
// import {Image} from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";

export function BlogCard() {
  return (
    <Card className="max-w-[400px]">
      {
        /* <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader> */
      }
      {/* <Divider/> */}
      <CardBody>
        <p>Hello World! New site!!</p>
      </CardBody>
      {
        /* <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */
      }
    </Card>
  );
}

export function ProjectCard(
  { title, repo, language, description, preview }: {
    title: string;
    repo: string;
    language: string;
    description: string;
    preview?: string;
  },
) {
  return (
    <Card className="min-w-[400px] max-w-[400px]">
      <CardHeader className="flex gap-3">
        {
          /* <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        /> */
        }
        <div className="flex flex-col">
          <Link
            isExternal
            showAnchorIcon
            href={"https://github.com/" + repo}
          >
            <p className="text-md">{title}</p>
          </Link>
          <p className="text-small text-default-500 text-left">{language}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{description}</p>
        {preview && <img src={preview} className="pt-4" />}
      </CardBody>
      {
        /* <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */
      }
    </Card>
  );
}
