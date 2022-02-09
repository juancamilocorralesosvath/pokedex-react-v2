import { useMemo } from "react"

/* things we need to take into account:
    1)this hook must display the number of pages available 
    2)Re-run computation logic when either currentPage, pageSize, siblingCount or totalCount changes
    3)The number of items returned by this hook should remain constant to avoid the pagination component from resizing everytime a change is made     
*/
export const usePagination = ({
    //defining the props
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
}) => {
    //begins the function
    //So, inside of the function we define another function
                                    //the callback we are defining here inside useMemo will run whenever any value in its dependency array changes.
    const paginationRange = useMemo(()=>{
        //implementation logic will go here.
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};