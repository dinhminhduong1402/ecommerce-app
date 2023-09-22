import { MainLayout } from './components'
import { primaryFont } from './fonts'
import './styles/globalStyles.scss'
import { DataProvider } from './context/DataProvider'
// toast messages
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Zoom } from 'react-toastify';

export const metadata = {
  title: 'VeganVibe Cosmetsy',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <DataProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </DataProvider>
        <ToastContainer className={`toastify-custom-style`}
          hideProgressBar={false}
          autoClose={1000}
          position='bottom-right'
          transition={Zoom}
          pauseOnHover={true}
        />
      </body>
    </html>
  )
}
