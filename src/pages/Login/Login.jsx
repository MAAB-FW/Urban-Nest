import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { RxGithubLogo } from "react-icons/rx"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../routes/AuthInject/AuthInject"
import toast from "react-hot-toast"

const Login = () => {
    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    // console.log(loginUser)
    const onSubmit = (data) => {
        const { email } = data
        const { password } = data
        // console.log(email, password)
        loginUser(email, password)
            .then((r) => {
                console.log(r.user)
                toast.success("Successfully Logged in!")
                navigate(location.state || "/")
            })
            .catch((e) => {
                console.log(e)
                toast.error("Incorrect email or password!")
            })
    }

    const handleGoogle = () => {
        googleLogin()
            .then((r) => {
                console.log(r)
                toast.success("Successfully Logged in!")
                navigate(location.state || "/")
            })
            .catch((e) => {
                console.log(e)
                toast.error("Incorrect email or password!")
            })
    }
    const handleGithub = () => {
        githubLogin()
            .then((r) => {
                console.log(r)
                toast.success("Successfully Logged in!")
                navigate(location.state || "/")
            })
            .catch((e) => {
                console.log(e)
                toast.error("Incorrect email or password!")
            })
    }

    return (
        <div className="pt-24 w-[83%] mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div data-aos="zoom-in" className=" py-6 flex flex-col justify-center md:py-12 ">
                <div className="relative py-3 md:max-w-xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-4 md:skew-y-0 -rotate-6 rounded-3xl"></div>
                    <div className="relative px-10 py-10 bg-white shadow-lg  rounded-3xl md:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Login</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="py-8 text-base leading-6 space-y-4 text-gray-700  md:leading-7">
                                    <div className="relative">
                                        <input
                                            {...register("email", {
                                                required: { value: true, message: "This field is required" },
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                            autoComplete="off"
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Email address"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                            Email Address
                                        </label>
                                        <div>
                                            {errors.email && (
                                                <span className="text-red-600 text-sm font-semibold">{errors.email.message}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input
                                            {...register("password", {
                                                required: { value: true, message: "This field is required" },
                                                pattern: {
                                                    value: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                                                    message: "Password needs 1 uppercase, 1 lowercase, min. 6 chars.",
                                                },
                                            })}
                                            autoComplete="off"
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Password"
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                            Password
                                        </label>
                                        <div className="w-56">
                                            {errors.password && (
                                                <span className="text-red-600 text-sm font-semibold">
                                                    {errors.password.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <button className="bg-cyan-500 text-white rounded-md px-2 py-1">Login</button>
                                    </div>
                                </form>
                            </div>
                            <div className="flex items-center justify-between pb-6">
                                <p className="mb-0 me-2">Don&apos;t have an account?</p>
                                <Link
                                    to="/register"
                                    type="button"
                                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light">
                                    Register
                                </Link>
                            </div>
                        </div>

                        <div className="w-full flex flex-col justify-center gap-4">
                            <button
                                onClick={handleGoogle}
                                className="flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <FcGoogle className="text-2xl mr-4" />
                                <span>Continue With Google</span>
                            </button>
                            <button
                                onClick={handleGithub}
                                className="flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <RxGithubLogo className="text-2xl mr-4" />
                                <span>Continue With Github</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
