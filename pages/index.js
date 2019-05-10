import Link from "next/link";
import Header from "../components/header";
import Paper from '@material-ui/core/Paper';

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
        <Paper elevation={1}>
          <h1>NICE</h1>
        </Paper>
      </section>
    </main>
  );
}

export default Index;
