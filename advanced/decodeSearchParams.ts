import { String, Union } from 'ts-toolbelt'

const query = `/home?a=foo&b=woo`;

type Query = typeof query;


type SecondQueryPart = String.Split<Query, '?'>[1];
type QueryElements = String.Split<SecondQueryPart, '&'>;

type QueryParams = {
    [QueryElement in QueryElements[number]]: {
        [key in String.Split<QueryElement, '='>[0]]: String.Split<QueryElement, '='>[1]
    };
}[QueryElements[number]];

const obj: Union.Merge<QueryParams> = {
    a: 'foo',
    b: 'woo'
};