import { PropsWithChildren } from "react"

const BackgroundLayout = (props:PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center max-w-screen bg-white text-center text-black relative h-[100%] overflow-hidden ">
        <div>{props.children}</div>
    </div>
  )
}

export default BackgroundLayout