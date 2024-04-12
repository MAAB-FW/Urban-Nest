import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { AuthContext } from "../../routes/AuthInject/AuthInject"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

const UpdateProfile = () => {
    const { user, updateUserDetails } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm()
    const rf = () => {
        window.location.reload()
    }

    const onUpdate = (data) => {
        let preName = ""
        let prePhotoUrl = ""
        let { name, photoUrl } = data
        if (!name) {
            preName = user.displayName
        }
        if (!photoUrl) {
            prePhotoUrl = user.photoURL
        }

        if (name || photoUrl) {
            return updateUserDetails(name || preName, photoUrl || prePhotoUrl)
                .then(() => {
                    toast.success("Profile information updated successfully!")
                    setTimeout(() => {
                        rf()
                    }, 1000)
                })
                .catch(() => {
                    toast.error("An error Occur!")
                })
        } else {
            return toast.error("Must type proper name or photoUrl then update your info!")
        }
    }

    return (
        <div className="pt-24">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update Profile</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="">
                <div className=" py-6 flex flex-col justify-center max-w-sm md:max-w-md mx-auto md:py-12 ">
                    <div className="relative py-3 md:max-w-xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-4 md:skew-y-0 -rotate-6 rounded-3xl"></div>
                        <div className="relative px-10 py-10 bg-white shadow-lg  rounded-3xl md:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-xl text-center font-semibold">Update Your Profile Information</h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <form
                                        onSubmit={handleSubmit(onUpdate)}
                                        className="mt-3 text-base leading-6 space-y-4 text-gray-700  md:leading-7">
                                        <div className="border rounded-2xl py-4">
                                            <h1 className="text-center underline font-semibold my-3">Current info</h1>
                                            <div className="flex items-center justify-center">
                                                <img className="size-20 rounded-full" src={user.photoURL} alt="" />
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <span className="text-black font-medium">{user.displayName}</span>
                                            </div>
                                        </div>
                                        {/* name */}
                                        <div className="relative">
                                            <input
                                                {...register("name")}
                                                autoComplete="off"
                                                id="name"
                                                name="name"
                                                type="text"
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                placeholder="Your Name"
                                            />
                                            <label
                                                htmlFor="name"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                New Name
                                            </label>
                                        </div>
                                        {/* photo url  */}
                                        <div className="relative">
                                            <input
                                                {...register("photoUrl")}
                                                autoComplete="off"
                                                id="photoUrl"
                                                name="photoUrl"
                                                type="text"
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                placeholder="photoUrl"
                                            />
                                            <label
                                                htmlFor="photoUrl"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                New Photo URL
                                            </label>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <button className="bg-cyan-500 text-white rounded-md px-2 py-1">Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile
