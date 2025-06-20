import * as React$1 from 'react';
import React__default, { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react_i18next from 'react-i18next';
import * as i18next from 'i18next';
import { TOptions } from 'i18next';
import * as _measured_puck from '@measured/puck';
import { Field, CustomField, Data, DefaultComponentProps, DefaultRootProps, Config, ComponentConfig, ArrayField, BaseField, ObjectField, NumberField } from '@measured/puck';
import { CTA as CTA$1, ImageType, LinkType, HoursTableProps as HoursTableProps$1, ComplexImageType, HoursType, AddressType, DayOfWeekNames, Coordinate } from '@yext/pages-components';
import { ClassValue } from 'clsx';
import * as _yext_search_headless_react from '@yext/search-headless-react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime_js from 'react/jsx-runtime.js';

declare const usePlatformBridgeDocument: () => any;

type YextSchemaField = {
    name: string;
    displayName?: string;
    definition: YextFieldDefinition;
    children?: {
        fields: YextSchemaField[];
    };
    optionFormat?: "OPTION_FORMAT_EXPANDED";
};
type YextFieldDefinition = {
    name: string;
    isList?: boolean;
    registryId?: string;
    typeName?: string;
    typeRegistryId?: string;
    type: Record<string, string>;
};
type StreamFields = {
    fields: YextSchemaField[];
    displayNames?: Record<string, string>;
};

/**
 * Under the hood we receive a Stream for a template, but we expose
 * hooks with a more user-friendly name.
 */
declare const usePlatformBridgeEntityFields: () => StreamFields | null;
declare const useEntityFields: () => StreamFields | null;

declare const TemplatePropsContext: React$1.Context<any>;
declare const useTemplateProps: <T>() => T;
declare const useDocument: <T>() => T;

declare const TailwindConfigContext: React$1.Context<any>;
declare const useTailwindConfig: <T>() => T;

declare const i18nPlatformInstance: i18next.i18n;
declare const usePlatformTranslation: () => react_i18next.UseTranslationResponse<"visual-editor", undefined>;
type MsgString = string & {
    __brand: "i18nPlatform";
};
/**
 * msg marks strings for translation in config JSON such
 * as Puck fields or the theme config. The TOptions are
 * stringified in the config and dynamically replaced
 * upon render.
 */
declare const msg: (key: string, defaultValue: string, options?: TOptions) => MsgString;
/**
 * pt translates strings based on the platform i18n. It can
 * operate as a normal TFunction or handle configurations that
 * have been stringified by msg.
 */
declare const pt: (keyOrEncodedValue: string | MsgString, optionsOrDefault?: string | TOptions, options?: TOptions) => string;

type BackgroundStyle = {
    bgColor: string;
    textColor: string;
};
type BackgroundOption = {
    label: string;
    value: BackgroundStyle;
};
declare const backgroundColors: Record<string, BackgroundOption>;
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
declare const defaultThemeTailwindExtensions: {
    colors: {
        "palette-primary-light": string;
        "palette-secondary-light": string;
        "palette-tertiary-light": string;
        "palette-quaternary-light": string;
        "palette-primary-dark": string;
        "palette-secondary-dark": string;
        "palette-primary-contrast": string;
        "palette-secondary-contrast": string;
        "palette-tertiary-contrast": string;
        "palette-quaternary-contrast": string;
        gray: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            800: string;
            900: string;
        };
    };
    fontSize: {
        "body-sm-fontSize": string;
        "body-lg-fontSize": string;
        "3xl": string;
        "4xl": string;
    };
};
declare const ThemeOptions: {
    HEADING_LEVEL: {
        label: string;
        value: HeadingLevel;
    }[];
    TEXT_TRANSFORM: {
        label: MsgString;
        value: string;
    }[];
    LETTER_SPACING: {
        label: string;
        value: string;
    }[];
    BACKGROUND_COLOR: {
        label: string;
        value: BackgroundStyle;
        color: string;
    }[];
    DARK_BACKGROUND_COLOR: {
        label: string;
        value: BackgroundStyle;
        color: string;
    }[];
    CTA_VARIANT: {
        label: MsgString;
        value: string;
    }[];
    ALIGNMENT: {
        label: MsgString;
        value: string;
    }[];
    JUSTIFY_CONTENT: {
        label: MsgString;
        value: string;
    }[];
    BODY_VARIANT: {
        label: MsgString;
        value: string;
    }[];
    BORDER_RADIUS: () => {
        label: string;
        value: string;
    }[];
    SPACING: () => {
        label: string;
        value: string;
    }[];
    FONT_SIZE: (includeLargeSizes?: boolean) => {
        label: string;
        value: string;
    }[];
    HOURS_OPTIONS: {
        label: MsgString;
        value: string;
    }[];
    PHONE_OPTIONS: {
        label: MsgString;
        value: string;
    }[];
};

declare const useBackground: () => BackgroundStyle | undefined;
declare const BackgroundProvider: ({ children, value, }: {
    children: ReactNode;
    value: BackgroundStyle;
}) => react_jsx_runtime.JSX.Element;

type CoreStyle = {
    label: string;
    type: "number";
    default: number;
} | {
    label: string;
    type: "select";
    default: string;
    options: StyleSelectOption[] | (() => StyleSelectOption[]);
} | {
    label: string;
    type: "color";
    default: string;
};
type Style = CoreStyle & {
    plugin: string;
};
type StyleSelectOption = {
    label: string;
    value: string;
};
type StyleGroup = {
    label: string;
    plugin: string;
    styles: {
        [key: string]: CoreStyle;
    };
};
type ThemeConfigSection = {
    label: string;
    styles: {
        [key: string]: Style | StyleGroup;
    };
};
type ThemeConfig = {
    [key: string]: ThemeConfigSection;
};
type TailwindConfig = {
    [key: string]: {
        [key: string]: any;
    };
};
/**
 * Merges the developer-specified theming and the marketer-specified theming,
 * giving priority to the developer-specified theming.
 */
declare const themeResolver: (developerTheming: TailwindConfig, marketerTheming: ThemeConfig) => TailwindConfig;

type Document = {
    [key: string]: any;
    __?: {
        layout?: string;
        theme?: string;
        codeTemplate?: string;
        name?: string;
    };
};
declare const applyTheme: (document: Document, themeConfig: ThemeConfig, base?: string) => string;

type Only<T, U> = {
    [P in keyof T]: T[P];
} & {
    [P in keyof U]?: never;
};
type Neither<T, U> = {
    [P in keyof T]?: never;
} & {
    [P in keyof U]?: never;
};
type Either<T, U> = Only<T, U> | Only<U, T>;
type EitherOrNeither<T, U> = Either<T, U> | Neither<T, U>;
type ConfigFields<T extends Record<string, any>> = T["stream"]["fields"];
type AllowList<T extends Record<string, any>> = {
    allowList: ConfigFields<T>[number][];
};
type DisallowList<T extends Record<string, any>> = {
    disallowList: ConfigFields<T>[number][];
};
type EntityFieldTypesFilter$1 = {
    types?: EntityFieldTypes[];
    includeListsOnly?: boolean;
    directChildrenOf?: string;
};
type RenderEntityFieldFilter<T extends Record<string, any>> = EntityFieldTypesFilter$1 & EitherOrNeither<AllowList<T>, DisallowList<T>>;
type EntityFieldTypes = "type.string" | "type.image" | "type.hours" | "type.address" | "type.phone" | "type.coordinate" | "type.cta" | "type.boolean" | "type.option" | "type.faq_section" | "type.testimonials_section" | "type.products_section" | "type.insights_section" | "type.rich_text_v2" | "type.team_section" | "type.events_section" | "type.promo_section" | "type.hero_section" | `c_${string}`;

type YextEntityField<T> = {
    field: string;
    constantValue: T;
    constantValueEnabled?: boolean;
    disallowTranslation?: boolean;
};
type RenderYextEntityFieldSelectorProps<T extends Record<string, any>> = {
    label: string;
    filter: RenderEntityFieldFilter<T>;
    disableConstantValueToggle?: boolean;
    disallowTranslation?: boolean;
};
/**
 * Allows the user to select an entity field from the document and set a constant value.
 */
declare const YextEntityFieldSelector: <T extends Record<string, any>, U>(props: RenderYextEntityFieldSelectorProps<T>) => Field<YextEntityField<U>>;

type EntityFieldTypesFilter = {
    type: StructEntityFieldTypes;
};
type StructEntityFieldTypes = "type.hero_section" | "type.promo_section";
type YextStructEntityField<T extends Record<string, any> = any> = {
    field: string;
    constantValue: T;
    constantValueEnabled?: boolean;
    constantValueOverride: {
        [K in keyof T]: boolean;
    };
};
type StructSelectorProps = {
    label: string;
    filter: EntityFieldTypesFilter;
    disallowTranslation?: boolean;
};
declare const YextStructFieldSelector: <U extends Record<string, any>>(props: StructSelectorProps) => CustomField<YextStructEntityField<U>>;

declare const resolveYextEntityField: <T>(document: any, entityField: YextEntityField<T>) => T | undefined;
declare const resolveYextStructField: <T extends Record<string, any>>(document: any, entityField: YextStructEntityField<T>) => T | undefined;

/**
 * Converts a type TranslatableString to a string
 * @param translatableString
 * @param locale
 */
declare const resolveTranslatableString: (translatableString?: TranslatableString, locale?: string) => string;
/**
 * Converts a type TranslatableRichText to a type that can be viewed on the page
 * @param translatableRichText
 * @param locale
 */
declare const resolveTranslatableRichText: (translatableRichText?: TranslatableRichText, locale?: string) => string | React__default.ReactElement;

declare const themeManagerTwMergeConfiguration: {
    extend: {
        classGroups: {
            "font-family": {
                font: ((value: string) => boolean)[];
            }[];
            "font-weight": {
                font: ((value: string) => boolean)[];
            }[];
            "font-size": {
                text: ((value: string) => boolean)[];
            }[];
            "text-color": {
                text: ((value: string) => boolean)[];
            }[];
            gap: {
                gap: ((value: string) => boolean)[];
            }[];
            py: {
                py: ((value: string) => boolean)[];
            }[];
            px: {
                px: ((value: string) => boolean)[];
            }[];
            "max-w": {
                "max-w": ((value: string) => boolean)[];
            }[];
            "bg-color": {
                "bg-color": ((value: string) => boolean)[];
            }[];
            rounded: {
                rounded: ((value: string) => boolean)[];
            }[];
            "text-transform": ((value: string) => boolean)[];
            tracking: ((value: string) => boolean)[];
        };
    };
};
declare function themeManagerCn(...inputs: ClassValue[]): string;

type FontRegistry = Record<string, FontSpecification>;
type FontSpecification = {
    italics: boolean;
    fallback: "sans-serif" | "serif" | "monospace" | "cursive";
} & ({
    minWeight: number;
    maxWeight: number;
} | {
    weights: number[];
});
declare const defaultFonts: FontRegistry;
declare const constructFontSelectOptions: (fonts: FontRegistry) => StyleSelectOption[];
type getFontWeightParams = {
    fontCssVariable?: string;
    weightOptions?: StyleSelectOption[];
    fontList?: FontRegistry;
};
declare const getFontWeightOptions: (options: getFontWeightParams) => StyleSelectOption[];
declare const getFontWeightOverrideOptions: (options: getFontWeightParams) => Promise<StyleSelectOption[]>;

type AllOrNothing<T extends Record<string, any>> = T | Partial<Record<keyof T, never>>;
type UniversalProps<T> = {
    templateProps: T;
    children: React__default.ReactNode;
};
type EditorProps$1 = {
    entityFields: StreamFields | null;
    tailwindConfig: TailwindConfig;
};
type VisualEditorProviderProps<T> = UniversalProps<T> & AllOrNothing<EditorProps$1>;
declare const VisualEditorProvider: <T extends Record<string, any>>({ templateProps, entityFields, tailwindConfig, children, }: VisualEditorProviderProps<T>) => react_jsx_runtime.JSX.Element;

/**
 * Check that the string is a valid slug.
 *
 * @param content The content to check
 * @return Boolean indicating if it's a valid slug or not
 */
declare const validateSlug: (content: string) => boolean;
/**
 * Normalizes the provided content by converting upper-case ones to lower case,
 * replacing white spaces, '?', and '#', with a "-" and stripping all other illegal characters.
 *
 * @param content The content to normalize
 * @return The normalized result
 */
declare const normalizeSlug: (content: string) => string;

declare const applyAnalytics: (document: Record<string, any>) => string | undefined;

declare const applyHeaderScript: (document: Record<string, any>) => any;

type RootConfig = {
    title?: string;
    description?: string;
    [key: string]: any;
};
declare function getPageMetadata(document: Record<string, any>): RootConfig;

declare const fetchNearbyLocations: ({ businessId, apiKey, contentEndpointId, contentDeliveryAPIDomain, latitude, longitude, radiusMi, limit, }: {
    businessId: string;
    apiKey: string;
    contentEndpointId: string;
    contentDeliveryAPIDomain: string;
    longitude: number;
    latitude: number;
    radiusMi: number;
    limit: number;
}) => Promise<Record<string, any>>;

declare const fetchLocalesToPathsForEntity: ({ businessId, apiKey, contentEndpointId, contentDeliveryAPIDomain, entityId, }: {
    businessId: string;
    apiKey: string;
    contentEndpointId: string;
    contentDeliveryAPIDomain: string;
    entityId: string;
}) => Promise<Record<string, string>>;

/**
 * Builds the search headless config for the template. Returns undefined if the config is not valid.
 * @param document the entity document
 * @param experienceKeyEnvVar can be provided via withPropOverrides for a hybrid developer
 */
declare const createSearchHeadlessConfig: (document: any, experienceKeyEnvVar?: string) => (_yext_search_headless_react.SearchConfigWithApiKey & {
    headlessId?: string;
    verticalKey?: string;
}) | undefined;
/**
 * Builds the search analytics config for the template. Returns undefined if the config is not valid.
 * @param document the entity document
 * @param experienceKeyEnvVar can be provided via withPropOverrides for a hybrid developer
 */
declare const createSearchAnalyticsConfig: (document: any, experienceKeyEnvVar?: string) => {
    businessId: any;
    experienceKey: any;
    experienceVersion: string;
    region: any;
    env: string;
} | undefined;

type MigrationAction = {
    action: "removed";
} | {
    action: "renamed";
    newName: string;
} | {
    action: "updated";
    propTransformation: (oldProps: Record<string, any>) => Record<string, any>;
};
type Migration = Record<string, MigrationAction>;
type MigrationRegistry = Migration[];
interface RootProps extends DefaultRootProps {
    props?: {
        version?: number;
    };
}
declare const migrate: (data: Data<DefaultComponentProps, RootProps>, migrationRegistry?: MigrationRegistry, config?: Config) => Data;

declare function withPropOverrides<P extends DefaultComponentProps>(base: ComponentConfig<P>, overrides: Partial<P>): ComponentConfig<P>;

declare const i18nComponentsInstance: i18next.i18n;

type TranslatableCTA = Omit<CTA$1, "label"> & {
    label: TranslatableString;
};
type HeroSectionType = {
    image?: ImageType;
    primaryCta?: TranslatableCTA;
    secondaryCta?: TranslatableCTA;
};
type PromoSectionType = {
    image?: ImageType;
    title?: TranslatableString;
    description?: TranslatableRichText;
    cta?: TranslatableCTA;
};
type ProductSectionType = {
    products: Array<ProductStruct>;
};
type ProductStruct = {
    image?: ImageType;
    name?: TranslatableString;
    description?: TranslatableRichText;
    category?: TranslatableString;
    cta?: TranslatableCTA;
};
type EventSectionType = {
    events: Array<EventStruct>;
};
type EventStruct = {
    image?: ImageType;
    title?: TranslatableString;
    dateTime?: string;
    description?: TranslatableRichText;
    cta?: TranslatableCTA;
};
type FAQSectionType = {
    faqs: Array<FAQStruct>;
};
type FAQStruct = {
    question: TranslatableString;
    answer: TranslatableRichText;
};
type TestimonialSectionType = {
    testimonials: Array<TestimonialStruct>;
};
type TestimonialStruct = {
    description?: TranslatableRichText;
    contributorName?: TranslatableString;
    contributionDate?: string;
};
type InsightSectionType = {
    insights: Array<InsightStruct>;
};
type InsightStruct = {
    image?: ImageType;
    name?: TranslatableString;
    category?: TranslatableString;
    publishTime?: string;
    description?: TranslatableRichText;
    cta?: TranslatableCTA;
};
type TeamSectionType = {
    people: Array<PersonStruct>;
};
type PersonStruct = {
    headshot?: ImageType;
    name?: TranslatableString;
    title?: TranslatableString;
    phoneNumber?: string;
    email?: string;
    cta?: TranslatableCTA;
};
type LocalizedValues = {
    hasLocalizedValue: "true";
} & Record<string, string>;
type TranslatableString = string | LocalizedValues;
type TranslatableRichText = (string | RichText) | Record<string, string | RichText>;
type RichText = {
    html?: string;
    json?: string;
};

type ComponentField = {
    name: string;
    type: StructEntityFieldTypes | EntityFieldTypes;
    isList: boolean;
    tooltipDescription: string;
    altLanguageBehavior: "LANGUAGE_SPECIFIC" | "PRIMARY_ONLY" | "OVERRIDABLE";
};
declare const ComponentFields: {
    readonly HeroSection: {
        readonly name: "Hero Section";
        readonly type: "type.hero_section";
        readonly isList: false;
        readonly tooltipDescription: "";
        readonly altLanguageBehavior: "LANGUAGE_SPECIFIC";
    };
    readonly PromoSection: {
        readonly name: "Promo Section";
        readonly type: "type.promo_section";
        readonly isList: false;
        readonly tooltipDescription: "";
        readonly altLanguageBehavior: "LANGUAGE_SPECIFIC";
    };
    readonly ProductSection: {
        readonly name: "Product Section";
        readonly type: "type.products_section";
        readonly isList: false;
        readonly tooltipDescription: "";
        readonly altLanguageBehavior: "LANGUAGE_SPECIFIC";
    };
    readonly EventSection: {
        readonly name: "Event Section";
        readonly type: "type.events_section";
        readonly isList: false;
        readonly tooltipDescription: "";
        readonly altLanguageBehavior: "LANGUAGE_SPECIFIC";
    };
    readonly FAQSection: {
        readonly name: "FAQ Section";
        readonly type: "type.faq_section";
        readonly isList: false;
        readonly tooltipDescription: "";
        readonly altLanguageBehavior: "LANGUAGE_SPECIFIC";
    };
    readonly TestimonialSection: {
        readonly name: "Testimonial Section";
        readonly type: "type.testimonials_section";
        readonly isList: false;
        readonly tooltipDescription: "";
        readonly altLanguageBehavior: "LANGUAGE_SPECIFIC";
    };
    readonly InsightSection: {
        readonly name: "Insight Section";
        readonly type: "type.insights_section";
        readonly isList: false;
        readonly tooltipDescription: "";
        readonly altLanguageBehavior: "LANGUAGE_SPECIFIC";
    };
    readonly TeamSection: {
        readonly name: "Team Section";
        readonly type: "type.team_section";
        readonly isList: false;
        readonly tooltipDescription: "";
        readonly altLanguageBehavior: "LANGUAGE_SPECIFIC";
    };
};

type EditorProps = {
    document: any;
    componentRegistry: Map<string, Config<any>>;
    themeConfig?: ThemeConfig;
    localDev?: boolean;
    forceThemeMode?: boolean;
};
declare const Editor: ({ document, componentRegistry, themeConfig, localDev, forceThemeMode, }: EditorProps) => react_jsx_runtime.JSX.Element;

type EntityFieldProps = {
    displayName?: string;
    fieldId?: string;
    constantValueEnabled?: boolean;
    children: React__default.ReactNode;
};
declare const EntityField: ({ displayName, fieldId, constantValueEnabled, children, }: EntityFieldProps) => string | number | boolean | Iterable<React__default.ReactNode> | react_jsx_runtime.JSX.Element | null | undefined;

type OptionalNumberFieldProps = {
    fieldLabel: string;
    hideNumberFieldRadioLabel: string;
    showNumberFieldRadioLabel: string;
    defaultCustomValue: number;
};
declare const OptionalNumberField: ({ fieldLabel, hideNumberFieldRadioLabel, showNumberFieldRadioLabel, defaultCustomValue, }: OptionalNumberFieldProps) => CustomField<number | string>;

declare const FontSizeSelector: (label?: string, includeLargeSizes?: boolean) => Field;

declare const BorderRadiusSelector: (label?: string) => Field;

declare const SpacingSelector: (label: string, spacingType: "padding" | "gap", includeDefault: boolean) => Field;

type Option<T = any> = {
    label: string;
    value: T;
    color?: string;
};
type BasicSelectorProps = {
    label: string;
    options: Option[];
    translateOptions?: boolean;
    noOptionsPlaceholder?: string;
    noOptionsMessage?: string;
};
declare const BasicSelector: (props: BasicSelectorProps) => Field;

/** Copied from Puck, do not change */
type FieldOption = {
    label: string;
    value: string | number | boolean;
};
/** Copied from Puck, do not change */
type FieldOptions = Array<FieldOption> | ReadonlyArray<FieldOption>;
type radioOptions = "PHONE_OPTIONS" | "ALIGNMENT" | "BODY_VARIANT" | "JUSTIFY_CONTENT" | "CTA_VARIANT";
type selectOptions = keyof Omit<typeof ThemeOptions, radioOptions>;
type YextBaseField = {
    type: string;
};
type YextArrayField<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = YextBaseField & Omit<ArrayField<Props>, keyof BaseField>;
type YextNumberField = YextBaseField & Omit<NumberField, keyof BaseField>;
type YextObjectField<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = YextBaseField & Omit<ObjectField<Props>, keyof BaseField>;
type YextRadioField = YextBaseField & {
    type: "radio";
    options: FieldOptions | radioOptions;
};
type YextSelectField = YextBaseField & {
    type: "select";
    hasSearch?: boolean;
    options: FieldOptions | selectOptions;
};
type YextTextField = YextBaseField & {
    type: "text";
    isMultiline?: boolean;
    disallowTranslation?: boolean;
};
type YextOptionalNumberField = YextBaseField & Omit<OptionalNumberFieldProps, "fieldLabel"> & {
    type: "optionalNumber";
};
type YextEntitySelectorField<T extends Record<string, any> = Record<string, any>> = YextBaseField & Omit<RenderYextEntityFieldSelectorProps<T>, "label"> & {
    type: "entityField";
};
type YextFieldConfig<Props = any> = YextArrayField<Props extends Record<string, any> ? Props : any> | YextObjectField<Props extends Record<string, any> ? Props : any> | YextNumberField | YextTextField | YextEntitySelectorField<Props extends Record<string, any> ? Props : any> | YextSelectField | YextRadioField | YextOptionalNumberField;
declare function YextField<T = any>(fieldName: string, config: YextFieldConfig<T>): Field<T>;
declare function YextField<T extends Record<string, any>, U = any>(fieldName: string, config: YextEntitySelectorField<T>): Field<YextEntityField<U>>;

declare const KnowledgeGraphIcon: ({ enabled }: {
    enabled: boolean;
}) => react_jsx_runtime.JSX.Element;

/**
 * Generates a translatable string config
 * @param label optional label. Takes in a value from msg.
 * @param fieldType text or textarea display mode
 */
declare function TranslatableStringField<T extends TranslatableString | undefined = TranslatableString>(label?: MsgString, fieldType?: "text" | "textarea"): CustomField<T>;

/**
 * Generates a translatableRichText field config
 * @param label optional label. Takes in a value from msg
 */
declare function TranslatableRichTextField<T extends TranslatableRichText | undefined = TranslatableRichText>(label?: MsgString): CustomField<T>;

declare const bodyVariants: (props?: ({
    variant?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface BodyProps extends Omit<React$1.HTMLAttributes<HTMLParagraphElement>, "color">, VariantProps<typeof bodyVariants> {
}
declare const Body: React$1.ForwardRefExoticComponent<BodyProps & React$1.RefAttributes<HTMLParagraphElement>>;

declare const buttonVariants: (props?: ({
    variant?: "link" | "secondary" | "primary" | "directoryLink" | null | undefined;
    hasDarkBackground?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

interface CTAProps {
    label?: React$1.ReactNode;
    link?: string;
    linkType?: LinkType;
    eventName?: string;
    variant?: ButtonProps["variant"];
    className?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
    alwaysHideCaret?: boolean;
    ariaLabel?: string;
}
declare const CTA: {
    ({ label, link, linkType, variant, eventName, className, target, alwaysHideCaret, ariaLabel, }: CTAProps): react_jsx_runtime_js.JSX.Element;
    displayName: string;
};

declare const headingVariants: (props?: ({
    level?: 2 | 1 | 3 | 4 | 5 | 6 | null | undefined;
    fontSize?: "default" | "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "base" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null | undefined;
    weight?: "default" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | null | undefined;
    transform?: "none" | "uppercase" | "lowercase" | "capitalize" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface HeadingProps extends Omit<React$1.HTMLAttributes<HTMLHeadingElement>, "color">, VariantProps<typeof headingVariants> {
    level: HeadingLevel;
    semanticLevelOverride?: HeadingLevel | "span";
}
declare const Heading: React$1.ForwardRefExoticComponent<HeadingProps & React$1.RefAttributes<HTMLHeadingElement>>;

interface HoursTableAtomProps extends Omit<HoursTableProps$1, "dayOfWeekNames" | "intervalStringsBuilderFn"> {
    className?: string;
}
declare const HoursTableAtom: (props: HoursTableAtomProps) => react_jsx_runtime.JSX.Element;

interface ImageProps {
    image: ImageType | ComplexImageType;
    layout: "auto" | "fixed";
    aspectRatio?: number;
    width?: number;
    height?: number;
    className?: string;
}
declare const Image: React$1.FC<ImageProps>;

type MaybeLinkProps = {
    href?: string;
    children?: React$1.ReactNode;
    className?: string;
    eventName?: string;
    variant?: CTAProps["variant"];
    alwaysHideCaret?: boolean;
};
declare const MaybeLink: (props: MaybeLinkProps) => react_jsx_runtime.JSX.Element;

interface MaybeRTFProps extends Record<string, any> {
    data: RichText | string | undefined;
    bodyVariant?: BodyProps["variant"];
}
declare const MaybeRTF: ({ data, bodyVariant, ...props }: MaybeRTFProps) => react_jsx_runtime.JSX.Element | undefined;

declare const pageSectionVariants: (props?: ({
    verticalPadding?: "default" | "sm" | "footer" | "header" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface PageSectionProps extends React$1.HTMLAttributes<HTMLDivElement> {
    background?: BackgroundStyle;
    verticalPadding?: VariantProps<typeof pageSectionVariants>["verticalPadding"];
    as?: "div" | "section" | "nav" | "header" | "footer" | "main" | "aside";
    outerClassName?: string;
}
declare const PageSection: React$1.ForwardRefExoticComponent<PageSectionProps & React$1.RefAttributes<HTMLDivElement>>;

type PhoneAtomProps = {
    phoneNumber: string;
    label?: string;
    eventName?: string;
    backgroundColor?: BackgroundStyle;
    format: "domestic" | "international" | undefined;
    includeHyperlink: boolean;
    includeIcon: boolean;
};
declare const PhoneAtom: (props: PhoneAtomProps) => react_jsx_runtime.JSX.Element;

interface BackgroundProps extends React$1.HTMLAttributes<HTMLDivElement> {
    background?: BackgroundStyle;
    as?: "div" | "section" | "nav" | "header" | "footer" | "main" | "aside";
}
declare const Background: React$1.ForwardRefExoticComponent<BackgroundProps & React$1.RefAttributes<HTMLDivElement>>;

interface VisibilityWrapperProps {
    liveVisibility: boolean;
    isEditing: boolean;
    iconSize?: VariantProps<typeof wrapperVariants>["size"];
    children: React$1.ReactNode;
}
declare const wrapperVariants: (props?: ({
    size?: "md" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare const VisibilityWrapper: React$1.FC<VisibilityWrapperProps>;

interface HoursStatusAtomProps {
    hours: HoursType;
    className?: string;
    showCurrentStatus?: boolean;
    showDayNames?: boolean;
    timeFormat?: "12h" | "24h";
    dayOfWeekFormat?: "short" | "long";
    timezone?: string;
}
declare const HoursStatusAtom: ({ hours, className, showCurrentStatus, showDayNames, timeFormat, dayOfWeekFormat, timezone, }: HoursStatusAtomProps) => any;

declare enum TimestampOption {
    DATE = "DATE",
    DATE_TIME = "DATE_TIME",
    DATE_RANGE = "DATE_RANGE",
    DATE_TIME_RANGE = "DATE_TIME_RANGE"
}
type TimestampProps = {
    date: string;
    option?: TimestampOption;
    endDate?: string;
    timeZone?: string;
    hideTimeZone?: boolean;
};
declare function Timestamp({ date, option, endDate, timeZone, hideTimeZone, }: TimestampProps): JSX.Element;

type BannerSectionProps = {
    styles: {
        backgroundColor?: BackgroundStyle;
        textAlignment: "left" | "right" | "center";
    };
    data: {
        text: YextEntityField<TranslatableString>;
    };
    liveVisibility: boolean;
};
declare const BannerSection: ComponentConfig<BannerSectionProps>;

type BreadcrumbsSectionProps = {
    data: {
        directoryRoot: TranslatableString;
    };
    analytics?: {
        scope?: string;
    };
    liveVisibility: boolean;
};
declare const BreadcrumbsSection: ComponentConfig<BreadcrumbsSectionProps>;

interface CoreInfoSectionProps {
    data: {
        info: {
            headingText: YextEntityField<TranslatableString>;
            address: YextEntityField<AddressType>;
            phoneNumbers: Array<{
                number: YextEntityField<string>;
                label: TranslatableString;
            }>;
            emails: YextEntityField<string[]>;
        };
        hours: {
            headingText: YextEntityField<TranslatableString>;
            hours: YextEntityField<HoursType>;
        };
        services: {
            headingText: YextEntityField<TranslatableString>;
            servicesList: YextEntityField<TranslatableString[]>;
        };
    };
    styles: {
        heading: {
            level: HeadingLevel;
            align: "left" | "center" | "right";
        };
        backgroundColor?: BackgroundStyle;
        info: {
            showGetDirectionsLink: boolean;
            phoneFormat: "domestic" | "international";
            includePhoneHyperlink: boolean;
            emailsListLength?: number;
        };
        hours: {
            startOfWeek: keyof DayOfWeekNames | "today";
            collapseDays: boolean;
            showAdditionalHoursText: boolean;
        };
    };
    analytics?: {
        scope?: string;
    };
    liveVisibility: boolean;
}
declare const CoreInfoSection: ComponentConfig<CoreInfoSectionProps>;

interface EventSectionProps {
    data: {
        heading: YextEntityField<TranslatableString>;
        events: YextEntityField<EventSectionType>;
    };
    styles: {
        backgroundColor?: BackgroundStyle;
        cardBackgroundColor?: BackgroundStyle;
        heading: {
            level: HeadingLevel;
            align: "left" | "center" | "right";
        };
    };
    analytics?: {
        scope?: string;
    };
    liveVisibility: boolean;
}
declare const EventSection: ComponentConfig<EventSectionProps>;

interface HeroSectionProps {
    data: {
        businessName: YextEntityField<TranslatableString>;
        localGeoModifier: YextEntityField<TranslatableString>;
        hours: YextEntityField<HoursType>;
        hero: YextStructEntityField<HeroSectionType>;
    };
    styles: {
        backgroundColor?: BackgroundStyle;
        imageOrientation: "left" | "right";
        businessNameLevel: HeadingLevel;
        localGeoModifierLevel: HeadingLevel;
        primaryCTA: CTAProps["variant"];
        secondaryCTA: CTAProps["variant"];
    };
    analytics?: {
        scope?: string;
    };
    liveVisibility?: boolean;
}
declare const HeroSection: ComponentConfig<HeroSectionProps>;

interface InsightSectionProps {
    data: {
        heading: YextEntityField<TranslatableString>;
        insights: YextEntityField<InsightSectionType>;
    };
    styles: {
        backgroundColor?: BackgroundStyle;
        cardBackgroundColor?: BackgroundStyle;
        heading: {
            level: HeadingLevel;
            align: "left" | "center" | "right";
        };
    };
    analytics?: {
        scope?: string;
    };
    liveVisibility: boolean;
}
declare const InsightSection: ComponentConfig<InsightSectionProps>;

interface NearbyLocationsSectionProps {
    data: {
        heading: YextEntityField<TranslatableString>;
        coordinate: YextEntityField<Coordinate>;
        radius: number;
        limit: number;
    };
    styles: {
        backgroundColor?: BackgroundStyle;
        cardBackgroundColor?: BackgroundStyle;
        heading: {
            level: HeadingLevel;
            align: "left" | "center" | "right";
        };
        cardHeadingLevel: HeadingLevel;
        phoneNumberFormat: "domestic" | "international";
        phoneNumberLink: boolean;
        hours: {
            showCurrentStatus: boolean;
            timeFormat?: "12h" | "24h";
            dayOfWeekFormat?: "short" | "long";
            showDayNames?: boolean;
        };
    };
    analytics?: {
        scope?: string;
    };
    liveVisibility: boolean;
    contentEndpointIdEnvVar?: string;
}
declare const NearbyLocationsSection: ComponentConfig<NearbyLocationsSectionProps>;

interface ProductSectionProps {
    data: {
        heading: YextEntityField<TranslatableString>;
        products: YextEntityField<ProductSectionType>;
    };
    styles: {
        backgroundColor?: BackgroundStyle;
        cardBackgroundColor?: BackgroundStyle;
        heading: {
            level: HeadingLevel;
            align: "left" | "center" | "right";
        };
    };
    analytics?: {
        scope?: string;
    };
    liveVisibility: boolean;
}
declare const ProductSection: ComponentConfig<ProductSectionProps>;

interface PromoSectionProps {
    data: {
        promo: YextStructEntityField<PromoSectionType>;
    };
    styles: {
        backgroundColor?: BackgroundStyle;
        orientation: "left" | "right";
        ctaVariant: CTAProps["variant"];
        heading: {
            level: HeadingLevel;
            align: "left" | "center" | "right";
        };
    };
    analytics?: {
        scope?: string;
    };
    liveVisibility?: boolean;
}
declare const PromoSection: ComponentConfig<PromoSectionProps>;

interface PhotoGallerySectionProps {
    data: {
        heading: YextEntityField<TranslatableString>;
        images: YextEntityField<ImageType[] | ComplexImageType[]>;
    };
    styles: {
        backgroundColor?: BackgroundStyle;
        heading: {
            level: HeadingLevel;
            align: "left" | "center" | "right";
        };
        imageStyle: Omit<ImageWrapperProps, "image">;
    };
    liveVisibility: boolean;
}
declare const PhotoGallerySection: ComponentConfig<PhotoGallerySectionProps>;

interface FAQSectionProps {
    data: {
        heading: YextEntityField<TranslatableString>;
        faqs: YextEntityField<FAQSectionType>;
    };
    styles: {
        backgroundColor?: BackgroundStyle;
        heading: {
            level: HeadingLevel;
            align: "left" | "center" | "right";
        };
    };
    liveVisibility: boolean;
}
declare const FAQSection: ComponentConfig<FAQSectionProps>;

interface TestimonialSectionProps {
    data: {
        heading: YextEntityField<TranslatableString>;
        testimonials: YextEntityField<TestimonialSectionType>;
    };
    styles: {
        backgroundColor?: BackgroundStyle;
        cardBackgroundColor?: BackgroundStyle;
        heading: {
            level: HeadingLevel;
            align: "left" | "center" | "right";
        };
    };
    liveVisibility: boolean;
}
declare const TestimonialSection: ComponentConfig<TestimonialSectionProps>;

interface TeamSectionProps {
    styles: {
        backgroundColor?: BackgroundStyle;
        cardBackgroundColor?: BackgroundStyle;
        heading: {
            level: HeadingLevel;
            align: "left" | "center" | "right";
        };
    };
    data: {
        heading: YextEntityField<TranslatableString>;
        people: YextEntityField<TeamSectionType>;
    };
    analytics?: {
        scope?: string;
    };
    liveVisibility: boolean;
}
declare const TeamSection: ComponentConfig<TeamSectionProps>;

declare const layoutVariants: (props?: ({
    gap?: "0" | "1" | "2" | "3" | "4" | "none" | "6" | "8" | "12" | "16" | "24" | "14" | "20" | "0.5" | "1.5" | "2.5" | "10" | "3.5" | "5" | "7" | "9" | "11" | null | undefined;
    verticalPadding?: "0" | "1" | "2" | "3" | "4" | "default" | "none" | "6" | "8" | "12" | "16" | "24" | "14" | "20" | "0.5" | "1.5" | "2.5" | "10" | "3.5" | "5" | "7" | "9" | "11" | null | undefined;
    horizontalPadding?: "0" | "1" | "2" | "3" | "4" | "none" | "6" | "8" | "12" | "16" | "24" | "14" | "20" | "0.5" | "1.5" | "2.5" | "10" | "3.5" | "5" | "7" | "9" | "11" | null | undefined;
    columnFormatting?: "default" | "none" | "forceHorizontal" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface layoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof layoutVariants> {
    backgroundColor?: BackgroundStyle;
}

interface FlexProps extends layoutProps {
    justifyContent: "start" | "center" | "end";
    alignItems: "start" | "center" | "end";
    direction: "flex-row" | "flex-col";
    wrap: "wrap" | "nowrap";
    liveVisibility: boolean;
}
declare const Flex: ComponentConfig<FlexProps>;

interface GridProps extends layoutProps {
    rows: number;
    columns: number;
    liveVisibility: boolean;
}
declare const Grid: ComponentConfig<GridProps>;

type AddressProps = {
    address: YextEntityField<AddressType>;
    showGetDirections: boolean;
};
declare const Address: ComponentConfig<AddressProps>;

interface BodyTextProps extends BodyProps {
    text: YextEntityField<TranslatableString>;
}
declare const BodyText: ComponentConfig<BodyTextProps>;

interface CTAWrapperProps {
    entityField: YextEntityField<CTAProps>;
    variant: CTAProps["variant"];
    className?: CTAProps["className"];
}
declare const CTAWrapper: ComponentConfig<CTAWrapperProps>;

interface EmailsProps {
    list: YextEntityField<string[]>;
    listLength?: number;
    includeHyperlink: boolean;
}
declare const Emails: ComponentConfig<EmailsProps>;

type GetDirectionsProps = {
    coordinate: YextEntityField<Coordinate>;
    variant: CTAProps["variant"];
};
declare const GetDirections: ComponentConfig<GetDirectionsProps>;

interface HeadingTextProps extends HeadingProps {
    text: YextEntityField<TranslatableString>;
}
declare const HeadingText: ComponentConfig<HeadingTextProps>;

type HoursTableProps = {
    hours: YextEntityField<HoursType>;
    startOfWeek: keyof DayOfWeekNames | "today";
    collapseDays: boolean;
    showAdditionalHoursText: boolean;
    alignment: "items-start" | "items-center";
};
declare const HoursTable: ComponentConfig<HoursTableProps>;

interface HoursStatusProps {
    hours: YextEntityField<HoursType>;
    className?: string;
    showCurrentStatus?: boolean;
    timeFormat?: "12h" | "24h";
    dayOfWeekFormat?: "short" | "long";
    showDayNames?: boolean;
}
declare const HoursStatus: ComponentConfig<HoursStatusProps>;

interface ImageWrapperProps extends Omit<ImageProps, "image"> {
    image: YextEntityField<ImageType | ComplexImageType>;
}
declare const ImageWrapper: ComponentConfig<ImageWrapperProps>;

type MapboxStaticProps = {
    apiKey: string;
    coordinate: YextEntityField<Coordinate>;
    zoom?: number;
    mapStyle?: string;
};
declare const MapboxStaticMap: ComponentConfig<MapboxStaticProps>;

interface PhoneProps {
    phone: YextEntityField<string>;
    format?: "domestic" | "international";
    includeHyperlink: boolean;
}
declare const Phone: ComponentConfig<PhoneProps>;

interface TextListProps {
    list: YextEntityField<TranslatableString[]>;
}
declare const TextList: ComponentConfig<TextListProps>;

type HeaderProps = {
    logoWidth?: number;
    enableLanguageSelector: boolean;
    analytics?: {
        scope?: string;
    };
};
declare const Header: ComponentConfig<HeaderProps>;

type FooterProps = {
    backgroundColor?: BackgroundStyle;
    analytics?: {
        scope?: string;
    };
};
declare const Footer: ComponentConfig<FooterProps>;

interface DirectoryProps {
    data: {
        directoryRoot: TranslatableString;
    };
    analytics?: {
        scope?: string;
    };
}
declare const Directory: ComponentConfig<DirectoryProps>;

type LocatorProps = {
    mapStyle?: string;
    entityTypeEnvVar?: string;
    experienceKeyEnvVar?: string;
};
declare const LocatorComponent: ComponentConfig<LocatorProps>;

type StaticMapSectionProps = {
    data: {
        apiKey: string;
    };
    liveVisibility: boolean;
};

interface PageSectionCategoryProps {
    BreadcrumbsSection: BreadcrumbsSectionProps;
    HeroSection: HeroSectionProps;
    EventSection: EventSectionProps;
    CoreInfoSection: CoreInfoSectionProps;
    InsightSection: InsightSectionProps;
    NearbyLocationsSection: NearbyLocationsSectionProps;
    BannerSection: BannerSectionProps;
    ProductSection: ProductSectionProps;
    PromoSection: PromoSectionProps;
    PhotoGallerySection: PhotoGallerySectionProps;
    TeamSection: TeamSectionProps;
    FAQSection: FAQSectionProps;
    StaticMapSection: StaticMapSectionProps;
    TestimonialSection: TestimonialSectionProps;
}
declare const PageSectionCategoryComponents: {
    BreadcrumbsSection: _measured_puck.ComponentConfig<BreadcrumbsSectionProps>;
    HeroSection: _measured_puck.ComponentConfig<HeroSectionProps>;
    CoreInfoSection: _measured_puck.ComponentConfig<CoreInfoSectionProps>;
    NearbyLocationsSection: _measured_puck.ComponentConfig<NearbyLocationsSectionProps>;
    BannerSection: _measured_puck.ComponentConfig<BannerSectionProps>;
    PhotoGallerySection: _measured_puck.ComponentConfig<PhotoGallerySectionProps>;
    StaticMapSection: _measured_puck.ComponentConfig<StaticMapSectionProps>;
    EventSection: _measured_puck.ComponentConfig<EventSectionProps>;
    FAQSection: _measured_puck.ComponentConfig<FAQSectionProps>;
    InsightSection: _measured_puck.ComponentConfig<InsightSectionProps>;
    ProductSection: _measured_puck.ComponentConfig<ProductSectionProps>;
    PromoSection: _measured_puck.ComponentConfig<PromoSectionProps>;
    TeamSection: _measured_puck.ComponentConfig<TeamSectionProps>;
    TestimonialSection: _measured_puck.ComponentConfig<TestimonialSectionProps>;
};
declare const PageSectionCategory: (keyof PageSectionCategoryProps)[];
interface OtherCategoryProps {
    Header: HeaderProps;
    Footer: FooterProps;
}
declare const OtherCategoryComponents: {
    Header: _measured_puck.ComponentConfig<HeaderProps>;
    Footer: _measured_puck.ComponentConfig<FooterProps>;
};
declare const OtherCategory: (keyof OtherCategoryProps)[];
interface DirectoryCategoryProps {
    Directory: DirectoryProps;
}
declare const DirectoryCategoryComponents: {
    Directory: _measured_puck.ComponentConfig<DirectoryProps>;
};
declare const DirectoryCategory: (keyof DirectoryCategoryProps)[];
interface LocatorCategoryProps {
    Locator: LocatorProps;
}
declare const LocatorCategoryComponents: {
    Locator: _measured_puck.ComponentConfig<LocatorProps>;
};
declare const LocatorCategory: (keyof LocatorCategoryProps)[];
/** THE CATEGORIES BELOW ARE NO LONGER SUPPORTED */
interface LayoutBlockCategoryProps {
    Flex: FlexProps;
    Grid: GridProps;
}
declare const LayoutBlockCategoryComponents: {
    Flex: _measured_puck.ComponentConfig<FlexProps>;
    Grid: _measured_puck.ComponentConfig<GridProps>;
};
declare const LayoutBlockCategory: (keyof LayoutBlockCategoryProps)[];
interface ContentBlockCategoryProps {
    Address: AddressProps;
    BodyText: BodyTextProps;
    CTAWrapper: CTAWrapperProps;
    Emails: EmailsProps;
    GetDirections: GetDirectionsProps;
    HeadingText: HeadingTextProps;
    HoursTable: HoursTableProps;
    HoursStatus: HoursStatusProps;
    ImageWrapper: ImageWrapperProps;
    MapboxStaticMap: MapboxStaticProps;
    Phone: PhoneProps;
    TextList: TextListProps;
}
declare const ContentBlockCategoryComponents: {
    Address: _measured_puck.ComponentConfig<AddressProps>;
    BodyText: _measured_puck.ComponentConfig<BodyTextProps>;
    CTAWrapper: _measured_puck.ComponentConfig<CTAWrapperProps>;
    Emails: _measured_puck.ComponentConfig<EmailsProps>;
    GetDirections: _measured_puck.ComponentConfig<GetDirectionsProps>;
    HeadingText: _measured_puck.ComponentConfig<HeadingTextProps>;
    HoursStatus: _measured_puck.ComponentConfig<HoursStatusProps>;
    HoursTable: _measured_puck.ComponentConfig<HoursTableProps>;
    ImageWrapper: _measured_puck.ComponentConfig<ImageWrapperProps>;
    MapboxStaticMap: _measured_puck.ComponentConfig<MapboxStaticProps>;
    Phone: _measured_puck.ComponentConfig<PhoneProps>;
    TextList: _measured_puck.ComponentConfig<TextListProps>;
};
declare const ContentBlockCategory: (keyof ContentBlockCategoryProps)[];

type SectionContainerProps = {
    background?: BackgroundStyle;
    sectionHeading: {
        text: YextEntityField<TranslatableString>;
        level: HeadingProps["level"];
        alignment: "left" | "right" | "center";
    };
    liveVisibility: boolean;
};
declare const SectionContainer: ComponentConfig<SectionContainerProps>;

declare const migrationRegistry: MigrationRegistry;

declare const addHeadingAlignmentMigration: Migration;

declare const defaultThemeConfig: ThemeConfig;

export { Address, type AddressProps, Background, type BackgroundProps, BackgroundProvider, type BackgroundStyle, BannerSection, type BannerSectionProps, BasicSelector, Body, type BodyProps, BodyText, type BodyTextProps, BorderRadiusSelector, BreadcrumbsSection, type BreadcrumbsSectionProps, Button, type ButtonProps, CTA, type CTAProps, CTAWrapper, type CTAWrapperProps, type ComponentField, ComponentFields, ContentBlockCategory, ContentBlockCategoryComponents, type ContentBlockCategoryProps, CoreInfoSection, type CoreInfoSectionProps, Directory, DirectoryCategory, DirectoryCategoryComponents, type DirectoryCategoryProps, type DirectoryProps, Editor, Emails, type EmailsProps, EntityField, EventSection, type EventSectionProps, type EventSectionType, type EventStruct, FAQSection, type FAQSectionProps, type FAQSectionType, type FAQStruct, Flex, type FlexProps, type FontRegistry, FontSizeSelector, Footer, type FooterProps, GetDirections, type GetDirectionsProps, Grid, type GridProps, Header, type HeaderProps, Heading, type HeadingLevel, type HeadingProps, HeadingText, type HeadingTextProps, HeroSection, type HeroSectionProps, type HeroSectionType, HoursStatus, HoursStatusAtom, type HoursStatusAtomProps, type HoursStatusProps, HoursTable, HoursTableAtom, type HoursTableAtomProps, type HoursTableProps, Image, type ImageProps, ImageWrapper, type ImageWrapperProps, InsightSection, type InsightSectionProps, type InsightSectionType, type InsightStruct, KnowledgeGraphIcon, LayoutBlockCategory, LayoutBlockCategoryComponents, type LayoutBlockCategoryProps, LocatorCategory, LocatorCategoryComponents, type LocatorCategoryProps, LocatorComponent, type LocatorProps, MapboxStaticMap, type MapboxStaticProps, MaybeLink, type MaybeLinkProps, MaybeRTF, type MaybeRTFProps, type Migration, type MigrationAction, type MigrationRegistry, NearbyLocationsSection, type NearbyLocationsSectionProps, OptionalNumberField, type OptionalNumberFieldProps, OtherCategory, OtherCategoryComponents, type OtherCategoryProps, PageSection, PageSectionCategory, PageSectionCategoryComponents, type PageSectionCategoryProps, type PageSectionProps, type PersonStruct, Phone, PhoneAtom, type PhoneAtomProps, type PhoneProps, PhotoGallerySection, type PhotoGallerySectionProps, ProductSection, type ProductSectionProps, type ProductSectionType, type ProductStruct, PromoSection, type PromoSectionProps, type PromoSectionType, type RenderYextEntityFieldSelectorProps, type RichText, SectionContainer, type SectionContainerProps, SpacingSelector, TailwindConfigContext, TeamSection, type TeamSectionProps, type TeamSectionType, TemplatePropsContext, TestimonialSection, type TestimonialSectionProps, type TestimonialSectionType, type TestimonialStruct, TextList, type TextListProps, type ThemeConfig, ThemeOptions, Timestamp, TimestampOption, type TimestampProps, type TranslatableCTA, type TranslatableRichText, TranslatableRichTextField, type TranslatableString, TranslatableStringField, VisibilityWrapper, VisualEditorProvider, type YextEntityField, YextEntityFieldSelector, YextField, type YextFieldDefinition, type YextSchemaField, type YextStructEntityField, YextStructFieldSelector, addHeadingAlignmentMigration, applyAnalytics, applyHeaderScript, applyTheme, backgroundColors, bodyVariants, buttonVariants, constructFontSelectOptions, createSearchAnalyticsConfig, createSearchHeadlessConfig, defaultFonts, defaultThemeConfig, defaultThemeTailwindExtensions, fetchLocalesToPathsForEntity, fetchNearbyLocations, getFontWeightOptions, getFontWeightOverrideOptions, getPageMetadata, headingVariants, i18nComponentsInstance, i18nPlatformInstance, migrate, migrationRegistry, msg, normalizeSlug, pt, resolveTranslatableRichText, resolveTranslatableString, resolveYextEntityField, resolveYextStructField, themeManagerCn, themeManagerTwMergeConfiguration, themeResolver, useBackground, useDocument, useEntityFields, usePlatformBridgeDocument, usePlatformBridgeEntityFields, usePlatformTranslation, useTailwindConfig, useTemplateProps, validateSlug, withPropOverrides };
