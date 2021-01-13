import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { registerInitial, validateForm } from "./data";
import SocialAuthBtn from "./SocialAuthBtn";
import Input, { checkIsEmail } from "../../common/components/Input";
import Alert from "../../common/components/AppAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { authRegister } from "./service";

const Register = (props) => {
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState(registerInitial);
  const [regisResult, setRegisResult] = useState({
    result: false,
    openAlert: false,
  });

  const history = useHistory();

  const submitRegister = async (event) => {
    event.preventDefault();
    setRegisResult(false);

    if (
      !validateForm(
        [
          registerData.username,
          registerData.password,
          registerData.firstName,
          registerData.lastName,
        ],
        registerData,
        setRegisterData
      )
    )
      return;

    setLoading(true);

    //call register api
    const api = await authRegister(
      registerData.username.value,
      registerData.password.value,
      registerData.firstName.value,
      registerData.lastName.value
    );

    if (api.status == 200 && api.data.status) {
      setRegisResult({openAlert:true});
      setTimeout(()=>{
        setLoading(false);
        history.push("/login");
      },2000);
    }else{
      setRegisResult({openAlert:true});
      setLoading(false);
    }

  };

  return (
    <section>
      <div className="hero-head mt-5">
        <br></br>
        <div className="container hero">
          <div className="columns is-centered">
            <div className="column  is-5  ">
              <div className="card">
                <div className="card-content">
                  <div class="content">
                    <h1 className="title is-4 has-text-centered">
                      สมัครสมาชิก
                    </h1>
                    <hr className="login-hr"></hr>
                    <form>
                      <div className="field is-horizontal">
                        <div className="field-body">
                          <div className="field">
                            <Input
                              label={"ชื่อ"}
                              type={"text"}
                              name={"firstName"}
                              dataForm={registerData}
                              setDataForm={setRegisterData}
                              errorStatus={registerData.firstName.error.status}
                              errorMessage={
                                registerData.firstName.error.message
                              }
                            ></Input>
                          </div>
                          <div className="field">
                            <Input
                              label={"นามสกุล"}
                              type={"text"}
                              name={"lastName"}
                              dataForm={registerData}
                              setDataForm={setRegisterData}
                              errorStatus={registerData.lastName.error.status}
                              errorMessage={registerData.lastName.error.message}
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="field ">
                        <Input
                          label={"อีเมล"}
                          type={"text"}
                          name={"username"}
                          dataForm={registerData}
                          setDataForm={setRegisterData}
                          errorStatus={registerData.username.error.status}
                          errorMessage={registerData.username.error.message}
                        ></Input>
                      </div>
                      <div className="field ">
                        <Input
                          label={"รหัสผ่าน"}
                          type={"password"}
                          name={"password"}
                          dataForm={registerData}
                          setDataForm={setRegisterData}
                          errorStatus={registerData.password.error.status}
                          errorMessage={registerData.password.error.message}
                        ></Input>
                      </div>
                      <div className="mt-5">
                        {!loading && (
                          <button
                            className="button is-block is-fullwidth is-warning is-rounded kanit-font"
                            type="submit"
                            onClick={submitRegister}
                          >
                            สมัครสมาชิก
                          </button>
                        )}

                        {loading && (
                          <button
                            className="button is-block is-fullwidth is-warning is-rounded kanit-font"
                            type="submit"
                            disabled
                            style={{ opacity: "0.8" }}
                          >
                            <FontAwesomeIcon
                              icon={faSpinner}
                              className="pr-2"
                              size="lg"
                            />
                            กำลังสมัคร...
                          </button>
                        )}
                      </div>
                      <hr className="login-hr"></hr>
                      <SocialAuthBtn
                        channel={"facebook"}
                        label={"สมัครสมาชิกผ่าน Facebook"}
                      ></SocialAuthBtn>
                      <div className="mt-5 ">
                        <SocialAuthBtn
                          channel={"google"}
                          label={"สมัครสมาชิกผ่าน Google"}
                        ></SocialAuthBtn>
                      </div>
                    </form>
                  </div>
                  <h5 class="subtitle is-6 has-text-centered">
                    เป็นสมาชิกเเล้ว ? <Link to="/login">เข้าสู่ระบบ</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {regisResult.openAlert &&
        (
          <Alert type="success"  message="สมัครสมาชิกสำเร็จ"></Alert>
        )
        }
    </section>
  );
};

export default Register;
