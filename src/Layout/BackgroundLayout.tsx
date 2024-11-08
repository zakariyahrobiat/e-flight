import { PropsWithChildren } from "react"

const BackgroundLayout = (props:PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center bg-white text-center text-black relative h-[100%] overflow-hidden ">
        <div className="w-screen">{props.children}</div>
    </div>
  )
}

export default BackgroundLayout