
import * as React from "react"
import { cn } from "@/lib/utils"

// Custom Tabs context to manage tab state
const TabsContext = React.createContext<{
  selectedTab: string;
  setSelectedTab: (id: string) => void;
} | null>(null)

// Custom Tabs Root component
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultValue, value, onValueChange, className, children, ...props }, ref) => {
    // Use controlled or uncontrolled state
    const [selectedTab, setSelectedTabState] = React.useState(value || defaultValue || "")
    
    // Handle external value changes
    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedTabState(value)
      }
    }, [value])
    
    // Handle tab selection
    const setSelectedTab = React.useCallback((newValue: string) => {
      if (value === undefined) {
        setSelectedTabState(newValue)
      }
      onValueChange?.(newValue)
    }, [onValueChange, value])
    
    return (
      <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = "Tabs"

// Custom TabsList component
const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      role="tablist"
      {...props}
    />
  )
})
TabsList.displayName = "TabsList"

// Custom TabsTrigger component
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = React.useContext(TabsContext)
    
    if (!context) {
      throw new Error("TabsTrigger must be used within Tabs")
    }
    
    const { selectedTab, setSelectedTab } = context
    const isActive = selectedTab === value
    
    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        aria-selected={isActive}
        data-state={isActive ? "active" : "inactive"}
        onClick={() => setSelectedTab(value)}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          isActive 
            ? "bg-background text-foreground shadow-sm" 
            : "hover:bg-background/50 hover:text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

// Custom TabsContent component
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = React.useContext(TabsContext)
    
    if (!context) {
      throw new Error("TabsContent must be used within Tabs")
    }
    
    const { selectedTab } = context
    const isActive = selectedTab === value
    
    if (!isActive) {
      return null
    }
    
    return (
      <div
        ref={ref}
        role="tabpanel"
        data-state={isActive ? "active" : "inactive"}
        className={cn("mt-2", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
