const Footer = () => {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} Riyansh Verma</span>
        </div>
        <div className="h-px w-full max-w-[100px] bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </footer>
  )
}

export default Footer
