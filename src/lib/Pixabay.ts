import axios from 'axios';

export type PixabayImage = {
  id: number;
  pageURL: string;
  type: 'photo';
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  fullHDURL: string;
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
};

type PixabayResponse<T> = {
  total: number;
  totalHits: number;
  hits: T[];
};

type PixabayConfig = { apiKey: string };

class Pixabay {
  private config: PixabayConfig | undefined;

  setConfig(values: PixabayConfig) {
    this.config = values;
  }

  async images(query: string, page = 1, pageSize = 15) {
    if (!this.config?.apiKey) {
      throw new Error('Pixabay configuration is missing');
    }

    try {
      const response = await axios.get<PixabayResponse<PixabayImage>>('https://pixabay.com/api/', {
        params: {
          key: this.config.apiKey,
          q: query,
          image_type: 'photo',
          orientation: 'vertical',
          safesearch: true,
          page,
          per_page: pageSize,
        },
      });
      return response?.data?.hits || [];
    } catch (e) {
      console.error(e);
    }
    return [];
  }
}

const pixabay = new Pixabay();

export default pixabay;
