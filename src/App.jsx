import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import NotFiles from './pages/notfile';
import Main from './pages/main';
import {
    About,
    Careers,
    Cart,
    CME,
    ContactUs,
    Customer,
    Financials,
    Notice,
    Product,
    QFC,
    Models,
    Mypage,
    Join,
    Logout,
    Login,
} from './pages';
import {
    ProductPage,
    ProductDetail,
    CustomerAdd,
    CustomerEdit,
    CustomerDetail,
    NoticeDetail,
    Edit,
    Address,
    Card,
    AccountDel,
} from './components';

const App = () => {
    return (
        <>
            <HashRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/models" element={<Models />} />

                        <Route path="/product">
                            <Route index element={<Product />} />
                            <Route path=":category" element={<ProductPage />} />
                            <Route path=":category/productdetail" element={<ProductDetail />} />
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

                        <Route path="/mypage">
                            <Route index element={<Mypage />} />
                            <Route path="edit" element={<Edit />} />
                            <Route path="card" element={<Card />} />
                            <Route path="address" element={<Address />} />
                            <Route path="accountDel" element={<AccountDel />} />
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

                        <Route path="/join" element={<Join />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/login" element={<Login />} />
                    </Route>

                    <Route path="*" element={<NotFiles />} />
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;
