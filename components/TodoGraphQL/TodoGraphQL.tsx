import React from 'react';
import { useQuery } from "@apollo/client";
import GET_LIST_TODOS from "graphql/query/getListTODOs";

const TodoGraphQL = () => {
    const { loading, error, data = [] } = useQuery(GET_LIST_TODOS);
    if (error) return <modal>Error Modal</modal>
    return (
        {loading? <div>Still loading</div> : <TODOTABLE data={data/>}
    )
}