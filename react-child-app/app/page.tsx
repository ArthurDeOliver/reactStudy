import { Avatar } from "./components/Avatar";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <>
      <Card>
        <Avatar
          name="Arthur de Oliveira"
          avatarURL="https://lh3.googleusercontent.com/a/ACg8ocL2ZCj1ZV95-bQYxffYSRPmjwU8b2oejuHJ9xHwBzCf3ClPQyI=s288-c-no"
        />
        <p>Desenvolvedor Frontend</p>
      </Card>
    </>
  );
}
