import { NavLink } from "react-router-dom";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
export function Menu() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const handleOpen = () => 
  {
    setOpen((cur) => !cur)
    reset();
  };
  function EnviarDatos(data) {
    alert(JSON.stringify(data));
    reset();
  }
  return (
    <nav className=" flex flex-row justify-evenly pt-8">
      <div className=" flex flex-row justify-evenly w-[25vw] text-white place-content-center items-center">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "no-underline text-[20px] text-white border-solid border-[#359497] pb-1 border-t-transparent border-l-transparent border-r-transparent"
              : "no-underline text-[20px] text-white pb-1"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "no-underline text-[20px] text-white border-solid border-[#359497] pb-1 border-t-transparent border-l-transparent border-r-transparent"
              : "no-underline text-[20px] text-white pb-1"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "no-underline text-[20px] text-white border-solid border-[#359497] pb-1 border-t-transparent border-l-transparent border-r-transparent"
              : "no-underline text-[20px] text-white pb-1"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <Button
        className=" bg-[#359497] border-none hover:bg-[#297478] text-[16px] ml-8"
        onClick={handleOpen}
      >
        Reservar Experiencia
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] bg-[#359497]">
          <CardBody className="flex flex-col gap-4">
            <form onSubmit={handleSubmit(EnviarDatos)} className="flex flex-col">
              <label htmlFor="email" className=" text-white">
                Email
              </label>
              <input
                className="h-10 rounded-lg border-0 focus:outline-none pl-3 text-[#359497] text-[16px] my-2"
                type="email"
                name='email'
                id="email"
                {...register('email',
                {
                  required: {
                    value: true,
                    message:'El email es requerido'
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'El email no es válido'
                  }
                })}
              />
              {errors.email && <span className=" text-red-500">{errors.email.message}</span>}
              <label htmlFor="password" className=" text-white">
                Password
              </label>
              <input
                className="h-10 rounded-lg border-0 focus:outline-none pl-3 text-[#359497] text-[16px] my-2"
                type="password"
                name='password'
                id="password"
                {...register('password', {
                  required: {
                    value: true,
                    message: " La contraseña es requerida"
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/,
                    message: " La contraseña no es válida"
                  }
                })}
                />
                {
                  errors.password && <span className=" text-red-500">{errors.password.message}</span>
                }
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="h-10 rounded-lg bg-white border-0 hover:border-transparent hover:bg-[#0d2226] hover:text-white  mt-8 mb-0 w-[50%] justify-self-end"
                >
                  Crear Cuenta
                </button>
              </div>
            </form>
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card>
      </Dialog>
    </nav>
  );
}
