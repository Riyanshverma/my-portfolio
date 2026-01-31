const Footer = () => {
  return (
    <footer className="w-full mt-10">
      <div className="flex flex-col items-center justify-center gap-2 text-md text-accent-foreground/60">
        <div className="">
          Inspired by <a href="https://ramx.in" target="_blank" rel="noopener noreferrer" className=" text-accent-foreground">Ram</a> and <a href="https://chanhdai.com" target="_blank" rel="noopener noreferrer" className=" text-accent-foreground">Chánh Đại</a> 
        </div>
        <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-accent-foreground/60 to-transparent" />
      </div>
    </footer>
  )
}

export default Footer
