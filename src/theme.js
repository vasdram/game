// see default theme - https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

const neutral3Color = '#262626';
const neutral4 = '#303030';
const neutral1 = '#141414';
const neutral2 = '#1D1D1D';
const gold6 = '#D89614';
const primary6 = '#F5C913';
const primary5 = '#CCA500';

module.exports = {
    // button
    '@btn-danger-bg': '#A61D24',
    '@btn-danger-color': '#FFFFFF',
    '@btn-text-shadow': 'none',
    '@btn-primary-color': neutral1,
    '@btn-primary-bg': primary6,

    '@btn-default-color': '#DBDBDB',
    '@btn-default-bg': 'transparent',
    '@btn-default-border': '#434343',

    '@btn-default-ghost-color': '#FFFFFF',
    '@btn-default-ghost-border': '#434343',

    '@btn-text-hover-bg': neutral2,

    '@btn-border-radius-base': '2px',
    '@btn-border-radius-sm': '2px',

    '@btn-font-size-lg': '16px',
    '@btn-font-size-sm': '14px',
    '@btn-padding-horizontal-base': '16px',
    '@btn-padding-horizontal-lg': '16px',
    '@btn-padding-horizontal-sm': '8px',

    // allert
    '@alert-info-border-color': '#7B6300',
    '@alert-info-bg-color': '#3D3100',
    '@alert-warning-border-color': '#594214',
    '@alert-warning-bg-color': '#2B2111',
    '@alert-warning-icon-color': gold6,
    '@alert-message-color': '#DBDBDB',
    '@alert-with-description-padding': '16px',
    '@alert-with-description-icon-size': '21px',

    // checkbox
    '@checkbox-check-color': neutral1,

    // input
    '@input-placeholder-color': '#7D7D7D',
    '@input-hover-border-color': primary5,

    // tooltip
    '@tooltip-bg': '#434343',

    // select
    '@select-item-selected-bg': '#3D3100',

    // divider
    '@divider-color': '#434343',

    // drawer
    '@drawer-header-padding': '12px 16px 0 16px',
    '@drawer-body-padding': '0',
    '@drawer-bg': neutral3Color,
    '@drawer-title-font-size': 'inherit',

    // steps
    '@process-tail-color': neutral4,

    // badge
    '@badge-text-color': '#FFFFFF',

    // segmented
    '@segmented-bg': neutral4,
    '@segmented-selected-bg': neutral2,
    '@segmented-label-color': '#DBDBDB',
    '@segmented-hover-bg': neutral4,
    '@segmented-label-hover-color': '#DBDBDB',

    // typography
    '@typography-title-margin-top': '0',
    '@typography-title-margin-bottom': '0',
    '@heading-1-size': '46px',
    '@heading-2-size': '24px',
    '@heading-3-size': '20px',
    '@heading-4-size': '16px',
    '@heading-5-size': '12px',
    '@heading-color': '#FFFFFF',
    '@font-family': '"Bai Jamjuree", sans-serif',

    // should be in the end
    // base
    '@primary-color': '#F5C913',
    '@primary-color-hover': primary5,
    '@primary-color-active': '#FFD93E',
    '@height-base': '32px',
    '@height-lg': '40px',
    '@height-sm': '24px',
    '@component-background': neutral1,
    '@border-color-base': '#434343',
    '@text-color': '#DBDBDB',
    '@text-color-secondary': '#FFFFFF',
    '@disabled-bg': neutral3Color,
    '@disabled-color': '#5A5A5A',
    '@error-color': '#D32029',
    '@item-hover-bg': '#3D3100',
    '@error-color-hover': '#A61D24',
    '@error-color-active': '#D32029',
    '@error-color-outline': 'rgba(245, 34, 45, 0.5)',
    '@warning-color-hover': gold6,
    '@warning-color-active': '#AA7714',
    '@warning-color-outline': 'rgba(250, 173, 20, 0.5)',
    '@outline-blur-size': '4px',
    '@outline-width': '0',
    '@primary-color-outline': 'rgba(24, 144, 255, 0.5)',
    '@theme': 'variable',
    '@border-color-split': 'transparent',
};
