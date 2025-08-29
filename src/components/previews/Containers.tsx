export function PreviewContainer({ children }): React.ReactNode {
  return <div className="rounded bg-white p-3 shadow-xs dark:bg-gray-900 dark:text-white">{children}</div>
}

export function DownloadBtnContainer({ children }): React.ReactNode {
  return (
    <div className="sticky bottom-0 left-0 right-0 z-10 rounded-sm border-t border-gray-900/10 bg-white bg-opacity-80 p-2 shadow-xs backdrop-blur-md dark:border-gray-500/30 dark:bg-gray-900">
      {children}
    </div>
  )
}
