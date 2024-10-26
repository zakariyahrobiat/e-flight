import { PropsWithChildren } from "react"

const BackgroundLayout = (props:PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center w-screen bg-white text-center text-black relative  ">
        <div>{props.children}</div>
    </div>
  )
}

export default BackgroundLayout