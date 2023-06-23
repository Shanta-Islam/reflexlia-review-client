import React from 'react';
import TableRow from './TableRow';

const TableView = ({reviewData, setLoading}) => {
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg border-2">
            <table className="w-full text-sm text-left text-gray-800">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Services Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Review Date
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Review Message
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className={(reviewData.length <= 0) ? '' : 'hidden'}>
                    <tr>
                        <th colspan="7">
                            <p className='text-2xl font-semibold text-center p-5 text-gray-800'>No Review Found</p>
                        </th>
                    </tr>
                </tbody>
                <tbody>
                    {reviewData.map(review => <TableRow key={reviewData._id} review={review} setLoading={setLoading}></TableRow>)}
                </tbody>
            </table>
        </div>
    );
};

export default TableView;