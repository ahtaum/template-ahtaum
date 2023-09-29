import React from 'react'

export default function Pagination({ currentPage, totalPages, onPageChange }: any) {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="pagination">
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`join-item btn ${currentPage === page ? 'btn-active' : ''}`}
                >
                    {page}
                </button>
            ))}
        </div>
    )
}
