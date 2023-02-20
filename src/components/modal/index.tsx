import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import { ButtonGo } from "../button";
import { Input } from "../input";
import { FormStyled } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formValues } from "../../interfaces";
import Aos from "aos";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify/dist/components";

export const FormSend = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const { modalForm } = useContext(UserContext);

  const formSchema = yup.object().shape({
    nome: yup.string().required("Insira o seu nome"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Insira um email válido!"),
    empresa: yup.string().required("Insira o nome da sua empresa"),
    telefone: yup.string().required("Insira o número de telefone"),
    funcionarios: yup.string().required("Selecione o número de funcionários"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({
    resolver: yupResolver(formSchema),
  });

  function userData(data: formValues) {
    const mensagem = {
      from_name: data.nome,
      email: data.email,
      reply_to: data.email,
      empresa: data.empresa,
      telefone: data.telefone,
      funcionarios: data.funcionarios,
    };

    emailjs
      .send(
        "service_0up95qr",
        "template_rlm62ah",
        mensagem,
        "z-YmDvK7w4UMQ8Ur0"
      )
      .then(
        (response) => {
          if (response.status === 200) {
            toast.success("Email enviado com sucesso!", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        },
        (error) => {
          if (error.status === 400) {
            toast.error("Oooops, ocorreu um erro", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        }
      );
    modalForm(false);
  }

  return (
    <FormStyled>
      <form
        data-aos="fade-down"
        data-aos-duration="1000"
        onSubmit={handleSubmit(userData)}
      >
        <button type="button" onClick={() => modalForm(false)}>
          X
        </button>
        <span>
          <h2>Você está pronto para o extraordinário? </h2>
          <p>Preencha seus dados abaixo para entrarmos em contato</p>
        </span>
        <Input
          type={"text"}
          id={"nome"}
          label={"Nome"}
          register={register("nome")}
          placeholder={"Digite seu nome"}
        />
        {errors.nome && <p className="error-input">{errors.nome.message}</p>}
        <Input
          register={register("empresa")}
          type={"text"}
          id={"empresa"}
          label={"Empresa"}
          placeholder={"Nome da empresa"}
        />

        {errors.empresa && (
          <p className="error-input">{errors.empresa.message}</p>
        )}
        <Input
          register={register("telefone")}
          type={"number"}
          id={"telefone"}
          label={"Telefone"}
          placeholder={"Digite seu telefone com DDD"}
        />
        {errors.telefone && (
          <p className="error-input">{errors.telefone.message}</p>
        )}
        <Input
          register={register("email")}
          type={"email"}
          id={"email"}
          label={"Email"}
          placeholder={"Digite seu email"}
        />
        {errors.email && <p className="error-input">{errors.email.message}</p>}
        <label>Número de funcionários</label>
        <select
          defaultValue={""}
          id="funcionarios"
          {...register("funcionarios")}
        >
          <option disabled value="">
            Selecione o número de funcionários
          </option>
          <option value="1 a 2">1 a 2</option>
          <option value="3 a 5">3 a 5</option>
          <option value="6 a 10">6 a 10</option>
          <option value="11 a 15">11 a 15</option>
          <option value="16 a 30">16 a 30</option>
          <option value="Acima de 30">Acima de 30</option>
        </select>
        {errors.funcionarios && (
          <p className="error-input">{errors.funcionarios.message}</p>
        )}
        <ButtonGo text={"Enviar"} />
      </form>
    </FormStyled>
  );
};
