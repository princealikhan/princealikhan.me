import Link from "next/link";
import Header from "../components/header";

function Index() {
  return (
    <main className="test">
      <Header />
      <section>
        <img src="/static/logo.png"/>
        
        <Link href="/about">
          <a>Go to sdf Me</a>

        </Link>
        <button className="ui button">Standard</button>

      </section>
    </main>
  );
}

export default Index;
