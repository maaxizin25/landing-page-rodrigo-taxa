import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { ButtonGo } from "../button";
import { Input } from "../input";
import { FormStyled } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formValues } from "../../interfaces";

export const FormSend = () => {
  const { modalForm } = useContext(UserContext);

  const formSchema = yup.object().shape({
    nome: yup.string().required("Insira o seu nome"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Insira um email válido!"),
    empresa: yup.string().required("Insira o nome da sua empresa"),
    telefone: yup.string().required("Insira o número de telefone"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({
    resolver: yupResolver(formSchema),
  });

  function userData(data: formValues) {
    console.log(data);
  }

  return (
    <FormStyled>
      <form onSubmit={handleSubmit(userData)}>
        <button type="button" onClick={() => modalForm(false)}>
          X
        </button>
        <span>
          <h2>Você está pronto para o extraordinário? </h2>
          <p>Preencha seus dados abaixo para entrarmos em contato</p>
        </span>
        <Input
          type={"text"}
          id={"name"}
          label={"Name"}
          register={register("name")}
          placeholder={"Digite seu nome"}
        />
        {errors.name && <p className="error-input">{errors.name.message}</p>}
        <Input
          register={register("empresa")}
          type={"text"}
          id={"empresa"}
          label={"Empresa"}
          placeholder={"Nome da empresa"}
        />
        {errors.name && <p className="error-input">{errors.name.message}</p>}
        <Input
          register={register("telefone")}
          type={"number"}
          id={"telefone"}
          label={"Telefone"}
          placeholder={"Digite seu telefone com DDD"}
        />
        {errors.name && <p className="error-input">{errors.name.message}</p>}
        <Input
          register={register("email")}
          type={"email"}
          id={"email"}
          label={"Email"}
          placeholder={"Digite seu email"}
        />
        {errors.name && <p className="error-input">{errors.name.message}</p>}
        <label>Número de funcionários</label>
        <select id="funcionarios">
          <option value="">1 a 2</option>
          <option value="">3 a 5</option>
          <option value="">6 a 10</option>
          <option value="">11 a 15</option>
          <option value="">16 a 30</option>
          <option value="">Acima de 30</option>
        </select>
        <ButtonGo text={"Enviar"} />
      </form>
    </FormStyled>
  );
};
