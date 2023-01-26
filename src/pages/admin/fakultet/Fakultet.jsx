import React, { useContext, useEffect, useState } from "react";

import "./Fakultet.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";
import Table from "../../../components/admin/table/Table";
import FaoliyatForm from "../../../components/admin/faoliyat/FaoliyatForm";
import XodimForm from "../../../components/admin/xodim_form/XodimForm";

import { Context } from "../../../context";

const Fakultet = () => {
  const { globalUrl } = useContext(Context);
  const [fakultetData, setFakultetData] = useState();
  const [type, setType] = useState("table");
  const props = {
    inputNames: {
      nameUz: "fakultet nomi Uz",
      nameRu: "fakultet nomi Ru",
      nameEn: "fakultet nomi En",
    },
    textEditorNames1: {
      nameUz: "maqsad va vazifa Uz",
      nameRu: "maqsad va vazifa Ru",
      nameEn: "maqsad va vazifa En",
    },
    textEditorNames2: {
      nameUz: "fakultet haqida Uz",
      nameRu: "fakultet haqida Ru",
      nameEn: "fakultet haqida En",
    },
    selectName: "select name",
    buttonName: "buttob name",
    url: "Fak_data/add",
  };
  let content = null;

  const analyseNameTableHead = ["Tartib raqam", "Fakultet nomi", "Amallar"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const bodyData = async () =>
    fetch(`${globalUrl}/Fak_data/all`)
      .then((res) => res.json())
      .then((data) => data.data);
  const renderBody = (item, index) => {
    return (
      <tr key={index} style={{ cursor: "pointer", userSelect: "none" }}>
        <td>{index + 1}</td>
        <td>{item.title_uz}</td>
        <td>
          <button className="event-btn edit" onClick={() => {}}>
            <i className="fa fa-edit"></i>
          </button>
          <button
            className="event-btn delete"
            onClick={() => deleteFakultet(item._id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  };

  function getData() {
    fetch(`${globalUrl}/Fak_data/all`, {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setFakultetData(res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteFakultet(id) {
    fetch(`${globalUrl}/Fak_data/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          alert(res.message + "❌");
        } else {
          alert("Malumotlar o'chirildi");
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
        window.localStorage.setItem("token", "sss");
      });
  }

  useEffect(() => {
    getData();
  }, [type]);

  if (type === "table") {
    content = (
      <Table
        headData={analyseNameTableHead}
        renderHead={renderHead}
        bodyData={fakultetData}
        renderBody={renderBody}
      />
    );
  } else if (type === "addFaculty") {
    content = (
      <AddForm
        inputNames={props.inputNames}
        textEditorNames1={props.textEditorNames1}
        textEditorNames2={props.textEditorNames2}
        selectName={props.selectName}
        buttomName={props.buttonName}
        hasSelect={false}
        url={props.url}
      />
    );
  } else if (type === "addEmployer") {
    content = (
      <XodimForm
        categoryId={"fakultet_id"}
        categoryEndpoint={"Fak_data/all"}
        employerEndpoint={"Fak_hodim/add"}
      />
    );
  } else {
    content = (
      <FaoliyatForm
        catogoryId="fakultet_id"
        url="Fak_data/all"
        categoryLabel="Faoliyat Qo'shish"
      />
    );
  }

  return (
    <>
      <FormHeader
        title="Fakultet"
        event1="Fakultetlar jadvali"
        event2="Fakultet qo`shish"
        event3="Xodim qo`shish"
        event4="Faoliyat qo`shish"
        handleEvent1={() => setType("table")}
        handleEvent2={() => setType("addFaculty")}
        handleEvent3={() => setType("addEmployer")}
        handleEvent4={() => setType("addAction")}
      />
      {content}
    </>
  );

  // return (
  //   <div>
  //     <FormHeader
  //       title="Fakultet"
  //       event1="Fakultet qo`shish"
  //       event2="Xodim qo`shish"
  //       event3="Faoliyat qo`shish"
  //     />
  //     <AddForm
  //       inputNames={props.inputNames}
  //       textEditorNames1={props.textEditorNames1}
  //       textEditorNames2={props.textEditorNames2}
  //       selectName={props.selectName}
  //       buttomName={props.buttonName}
  //       hasSelect={false}
  //       url={props.url}
  //     />

  //     <br />
  //     <br />
  //     <h1>---------------Fakultetga Faoliyat qo`shish-----------------</h1>
  //     <br />
  //     <br />
  //     <FaoliyatForm
  //       catogoryId="fakultet_id"
  //       url="Fak_data/all"
  //       categoryLabel="Faoliyat Qo'shish"
  //     />

  //     <br />
  //     <br />
  //     <h1>-------------------Barcha fakultetlar jadvali-----------------</h1>
  //     <br />
  //     <br />

  //     <Table
  //       headData={analyseNameTableHead}
  //       renderHead={renderHead}
  //       bodyData={fakultetData}
  //       renderBody={renderBody}
  //     />
  //     <br />
  //     <br />
  //     <h1>------------Xodim qo`shish------------</h1>
  //     <XodimForm
  //       categoryId={"fakultet_id"}
  //       categoryEndpoint={"Fak_data/all"}
  //       employerEndpoint={"Fak_hodim/add"}
  //     />
  //   </div>
  // );
};

export default Fakultet;
