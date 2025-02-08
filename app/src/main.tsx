import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { Provider } from 'react-redux'

import { BrowserRouter, Routes, Route } from "react-router";
import { Home, Login, CreateNewAccount } from "./pages"
import Layout from "./Layout";
import { store } from "./store/store";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/new-account" element={<CreateNewAccount/>}/>
              {/*<Route path="dashboard" element={<Dashboard />}>*/}
              {/*    <Route index element={<RecentActivity />} />*/}
              {/*    <Route path="project/:id" element={<Project />} />*/}
              {/*</Route>*/}
            </Routes>
          </Layout>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
