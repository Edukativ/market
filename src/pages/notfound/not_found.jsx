import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            Страница не найдена! <br /><br />

            <Link to={"/products"}>К продуктам</Link>
        </div>
    );
};

export default NotFoundPage;