import Link from "next/link";
import styles from "../Components/Dashboard.module.css";
export default function Dashboard(props: any) {
  console.log(props);
  return (
    <div className="Dashboard">
      <div className={styles.cabecalho}>
        <Link href="/">
          <a>Voltar</a>
        </Link>
      </div>
      {props.children}
    </div>
  );
}
