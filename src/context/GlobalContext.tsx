import { ReactNode, createContext, useContext, useState } from "react";

interface AppContextType  {
  isSidebarOpen:boolean
  isModalOpen:boolean
  openSidebar:()=>void
  closeSidebar:()=>void
  openModal:()=>void
  closeModal:()=>void
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }:{children:ReactNode}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext)
}
