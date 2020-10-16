import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import PersonCard from "../components/PersonCard";
import styles from "../styles/Profile.module.scss";

export default function Profile({ sourceData }) {
  const [data, setData] = useState(sourceData);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header fullname={data.fullname} />
      <PageTitle />
      <PersonCard
        fullname={data.fullname}
        email={data.email}
        phoneNumber={data.phoneNumber}
      />
      {/* <PersonCard>
            <FullName>  <Button:endIcon> isEdit ? close : editIcon
            isEdit ? <PersonData>
                   : <Form>     
      */}

      {/* component:
          <Form> validation
            3*<Inputs>
            submitButton onClick show Modal
       */}
      {/* component:
          <Modal>
            Accept
            Decline
       */}
    </div>
  );
}

Profile.getInitialProps = async () => {
  const response = await fetch("http://localhost:3000/api/data");
  const data = await response.json();

  return { sourceData: data };
};
