interface TitleProps {
  title: string;
  subtitle: string;
}
const Title = (props: TitleProps) => {
  const {title, subtitle} = props

  return (
    <>
    <div className="flex flex-col items-center" >
      <h3 className="text-gray-400" >{title}</h3>
      <h1 className="text-3xl " >{subtitle}</h1>
    </div>
    </>
  )
}

export default Title