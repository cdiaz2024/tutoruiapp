/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateTutoringEventOverridesProps = {
    CreateTutoringEvent?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    CreateTutoringEvent41602464?: PrimitiveOverrideProps<ViewProps>;
    "Frame 438"?: PrimitiveOverrideProps<ViewProps>;
    TextField41602476?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41921254?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41602584?: PrimitiveOverrideProps<TextFieldProps>;
    make?: PrimitiveOverrideProps<ButtonProps>;
    goback?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CreateTutoringEventProps = React.PropsWithChildren<Partial<ViewProps> & {
    tutoringEvent?: any;
} & {
    property1?: "Default" | "Variant2";
} & {
    overrides?: CreateTutoringEventOverridesProps | undefined | null;
}>;
export default function CreateTutoringEvent(props: CreateTutoringEventProps): React.ReactElement;
