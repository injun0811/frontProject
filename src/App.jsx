import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './commpon/Layout';
import NotFiles from './pages/notfile';
import Main from './pages/main';
import { About, Careers, Cart, CME, ContactUs, Customer, Financials, Notice, Product, QFC, Models } from './pages';
import { ProductPage, ProductDetail, CustomerAdd, CustomerEdit, CustomerDetail, NoticeDetail } from './components';

const App = () => {
    return (
        <>
            {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
            <HashRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/models" element={<Models />} />

                        <Route path="/product">
                            <Route index element={<Product />} />
                            <Route path="/product/:category" element={<ProductPage />} />
                            <Route path="/product/:category/productdetail" element={<ProductDetail />} />
                        </Route>

                        <Route path="/notice">
                            <Route index element={<Notice />} />
                            <Route path=":noticeID" element={<NoticeDetail />} />
                        </Route>

                        <Route path="/customer">
                            <Route index element={<Customer />} />
                            <Route path="customeradd" element={<CustomerAdd />} />
                            <Route path="customeredit" element={<CustomerEdit />} />
                            <Route path=":customerID" element={<CustomerDetail />} />
                        </Route>

                        <Route path="/cart" element={<Cart />} />

                        <Route path="/financials" element={<Financials />} />
                        <Route path="/qfc" element={<QFC />} />
                        <Route path="/cme" element={<CME />} />
                        <Route path="/contactUs" element={<ContactUs />} />
                        <Route path="/careers" element={<Careers />} />
                        {/* Financials (https://www.lamborghini.com/en-en/financials) */}
                        {/* Financials - Quarterly FINANCIAL COMMUNICATION (https://www.lamborghini.com/en-en/financials/quarterly-financial-communication) */}
                        {/* Financials - Capital Market events (https://www.lamborghini.com/en-en/financials/capital-market-events) */}
                        {/* Contact us (https://www.lamborghini.com/en-en/contact-us) */}
                        {/* Careers (https://www.lamborghini.com/en-en/careers) */}
                    </Route>

                    <Route path="*" element={<NotFiles />} />
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;
