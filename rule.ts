export function getCategoryLabel(categoryPublicName: string): string {
  switch (categoryPublicName) {
    case 'Committee':
      return '운영위원회';
    case 'Workship':
      return '노사협의회';
    case 'Introduce':
      return '소개';
    default:
      return '';
  }
}