import type { 
    MetaFunction, LoaderFunction, DataFunctionArgs,
    LinksFunction, HeadersFunction, json 
} from "@remix-run/node";
import { 
    Link, Outlet, useLoaderData, 
    useFetcher, useFetchers, useMatches, 
    useParams, useSearchParams, useSubmit, 
    useTransition } from "@remix-run/react";

export const loader: LoaderFunction = ({request, params, context}: DataFunctionArgs) => {
    
}