import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Esquema de validação com Zod
const schema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Digite um e-mail válido"),
  mensagem: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type FormValues = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Dados enviados:", data);
  };

  return (
    <footer className="flex flex-col h-[80vh]">
        <h1 className="bg-base text-secondary text-6xl inline-block mx-auto text-center p-4 -mt-8 rounded-lg">FALE COMIGO</h1>
        <div className="flex justify-center items-center">
            <div className="flex flex-1 justify-center items-center text-justify p-15">
                <p className="appear-left text-2xl font-bold text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ad, sunt ipsum quisquam harum neque quos ducimus aut sint incidunt! Dolor dolorem iusto repudiandae id nihil, minus cupiditate libero commodi?</p>
            </div>

            <div className="bg-secondary w-px h-11/12"></div>
            
            <div className="flex-1 p-15">
                <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-xl mx-auto p-4 space-y-4 text-secondary text-xl rounded-lg"
                >
                  <div className="flex flex-col gap-3">
                      <label className="appear block text-4xl">Nome</label>
                      <input
                      {...register("nome")}
                      className="appear-right w-full p-2 bg-[#191919] text-white rounded"
                      />
                      {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}
                  </div>

                  <div className="flex flex-col gap-3">
                      <label className="appear block text-4xl">E-mail</label>
                      <input
                      {...register("email")}
                      type="email"
                      className="appear-right w-full p-2 bg-[#191919] text-white rounded"
                      />
                      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>

                  <div className="flex flex-col gap-3">
                      <label className="appear block text-4xl">Mensagem</label>
                      <textarea
                      {...register("mensagem")}
                      className="appear-right w-full h-48 p-2 bg-[#191919] text-white rounded"
                      />
                      {errors.mensagem && (
                      <p className="text-red-500">{errors.mensagem.message}</p>
                      )}
                  </div>

                  <button
                      type="submit"
                      className="text-4xl w-full p-2 bg-[#191919] hover:bg-[rgba(25,25,25,0.3)] rounded cursor-pointer"
                  >
                      ENVIAR
                  </button>
                </form>
            </div>
        </div>
    </footer>
  );
}

export default Contact;