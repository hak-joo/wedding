declare namespace Kakao {
  function init(appKey: string): void;
  function isInitialized(): boolean;
  function login(options: { success: () => void; fail: () => void }): void;
  function logout(): void;
  function getAccessToken(): string;
  function cleanup(): void;
  function share(options: {
    objectType: 'feed' | 'list' | 'location' | 'commerce' | 'text';
    content: {
      title?: string;
      imageUrl?: string;
      link?: {
        webUrl?: string;
        mobileWebUrl?: string;
        androidExecutionParams?: string;
        iosExecutionParams?: string;
      };
      description?: string;
      price?: number;
      regularPrice?: number;
      discountPrice?: number;
      discountRate?: number;
      currencyUnit?: string;
      stock?: number;
      totalCount?: number;
      rating?: number;
      reviewCount?: number;
      deliveryFee?: number;
      originPrice?: number;
      originPriceCurrencyUnit?: string;
      makerId?: string;
      makerName?: string;
      displayPrice?: string;
      actorInfo?: {
        name?: string;
        profileImage?: string;
        url?: string;
      };
      addressInfo?: {
        address?: string;
        addressTitle?: string;
        latitude?: string;
        longitude?: string;
      };
      buttons?: [
        {
          title?: string;
          link?: {
            webUrl?: string;
            mobileWebUrl?: string;
            androidExecutionParams?: string;
            iosExecutionParams?: string;
          };
        }
      ];
    };
    success?: () => void;
    fail?: () => void;
  }): void;
  namespace Link {
    function sendScrap(options: {
      requestUrl: string;
      templateId?: number;
      templateArgs?: Record<string, string>;
    }): void;
  }
}
