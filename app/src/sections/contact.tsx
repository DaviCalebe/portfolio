import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Digite um e-mail válido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type FormValues = z.infer<typeof schema>;

const Contact = ({ t }: { t: (key:string) => string}) => {
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
        <h1 className="bg-base text-secondary text-6xl inline-block mx-auto text-center p-4 -mt-8 rounded-lg">{t("contact.title")}</h1>
        <div className="flex justify-center items-center">
            <div className="flex flex-1 justify-center items-center text-justify p-15">
                <p className="appear-left text-2xl font-bold text-secondary relative before:content-[''] before:absolute before:w-20 before:h-[5px] before:bg-secondary before:-top-2 before:left-0 hover:before:w-full before:transition-all before:duration-500 before:ease-out">{t("contact.invite")}</p>
            </div>

            <div className="bg-secondary w-px h-11/12"></div>
            
            <div className="flex-1 p-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-xl mx-auto p-4 space-y-4 text-secondary text-xl rounded-lg"
              >
                <div className="flex flex-col gap-1">
                  <label className="appear block text-4xl">{t("contact.form.name")}</label>
                  <input
                    {...register("name")}
                    className="appear-right w-full p-2 bg-[#191919] text-white rounded"
                  />
                  <AnimatePresence mode="wait">
                    {errors.name && (
                      <motion.p
                        key="error-message"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 min-h-7"
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="appear block text-4xl">{t("contact.form.email")}</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="appear-right w-full p-2 bg-[#191919] text-white rounded"
                  />
                  <AnimatePresence mode="wait">
                    {errors.email && (
                      <motion.p
                        key="error-message"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 min-h-7"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="appear block text-4xl">{t("contact.form.message")}</label>
                  <textarea
                    {...register("message")}
                    className="appear-right w-full h-48 p-2 bg-[#191919] text-white rounded"
                  />
                  <AnimatePresence mode="wait">
                    {errors.message && (
                      <motion.p
                        key="error-message"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 min-h-7"
                      >
                        {errors.message.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="submit"
                  className="text-4xl w-full p-2 bg-[#191919] hover:bg-[rgba(25,25,25,0.3)] rounded cursor-pointer"
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            </div>
        </div>
    </footer>
  );
}

export default Contact;