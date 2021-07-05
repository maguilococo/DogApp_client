import React from 'react';
import s from './index.module.css'
import { FaAngleLeft,  FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa';
const classNames = require("classnames");

export default function Pagination({ dogsPerPage, totalDogs, paginate, currentPage } ) {
    const pageNumbers= [];

    // Get all the numbers our page will have
    for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
        pageNumbers.push(i);
    }
    let firstPage = pageNumbers[0];
    let lastPage = pageNumbers.length;
    let next = currentPage+1;
    let prev = currentPage-1;

    return (
        <div className={s.pagination}>
            <ul>     
                <div className={s.forward}>            
                    {/* Previous page button */}
                    <li className={classNames(s.btn, s.prev)} key={-1}><span onClick={(e) => {
                        e.preventDefault(); 
                        currentPage > firstPage && paginate(prev);
                    }}><FaAngleLeft />Prev
                    </span></li>
                    {currentPage > firstPage && (
                        <>
                            {/* First page*/}
                            <li key={firstPage}><span className={classNames(s.btn, s.first)} onClick={(e) => {
                                e.preventDefault(); 
                                paginate(firstPage);}}>
                                <FaAngleDoubleLeft />  {firstPage}
                            </span></li>
                        </>
                    )}
                </div>
                 ...
                {currentPage> firstPage &&
                <li key = {prev}><span className={classNames(s.numb)} onClick={(e) => {
                    e.preventDefault(); 
                    paginate(prev);}}>
                    {prev}
                </span></li>}
                <li key = {currentPage}><span className={classNames(s.numb, s.active)} onClick={(e) => {
                    e.preventDefault(); 
                    paginate(currentPage);}}>
                    {currentPage}
                </span></li>
                {currentPage < lastPage && (
                    <li key = {next}><span className={classNames(s.numb)} onClick={(e) => {
                        e.preventDefault(); 
                        paginate(next);}}>
                        {next}
                    </span></li>
                )}
                ...
               <div className={s.forward}>
                    {currentPage < lastPage && (
                        <>
                            {/* Last page */}
                            <li key = {lastPage}><span className={classNames(s.btn, s.last)} onClick={(e) => {
                                e.preventDefault(); 
                                paginate(lastPage);}}>
                                {lastPage}  <FaAngleDoubleRight />
                            </span></li>
                        </>
                    )}                            
                    {/* Next page button */}
                    <li className={classNames(s.btn, s.next)} key={next}><span onClick={(e) => {
                        e.preventDefault(); 
                        paginate(next);
                        }}>Next<FaAngleRight />
                    </span></li>
                </div>
                   
            </ul>
        </div>
    )
};