import React, { useState } from 'react';
import { SearchBox, PageHeader, Avatar, Section } from '@t3n/components';
import { withKnobs } from '@storybook/addon-knobs';
import {
  SuggestionsFetchRequestedParams,
  SuggestionSelectedEventData
} from 'react-autosuggest';
import {
  GroupedSuggestions,
  SearchBoxVariantType
} from '@t3n/components/src/SearchBox';
import { storyContainerDecorator } from '../../../utils/decorators';

const placeholderText = 'Suche nach digitialen Pionieren, News und mehr';

export default {
  component: SearchBox,
  title: 'Components|Content/SearchBox',
  decorators: [withKnobs, storyContainerDecorator]
};

interface SuggestionCategory {
  title: string;
  suggestions: TSuggestion[];
}

interface TSuggestion {
  title: string;
  value: string;
  url: string;
  description: string;
}

const allSuggestions: TSuggestion[] = [
  {
    title: 'Erstes Ergebnis',
    description: 'Some description content',
    url: '/news',
    value: '1'
  },
  {
    title: 'Zweites Ergebnis',
    description: 'Some description content',
    url: '/news',
    value: '2'
  },
  {
    title: 'Drittes Ergebnis',
    description: 'Some description content',
    url: '/news',
    value: '3'
  }
];

const categorizedSuggestions: GroupedSuggestions<TSuggestion>[] = [
  {
    title: 'Pioniere',
    suggestions: allSuggestions
  },
  {
    title: 'Interessen',
    suggestions: allSuggestions
  },
  {
    title: 'Tools',
    suggestions: allSuggestions
  }
];

const SearchBoxWithData: React.FC<{
  isLoading: boolean;
  width: any;
  variant: SearchBoxVariantType;
  initialSuggestions: TSuggestion[];
}> = ({ isLoading, width, variant }) => {
  const [suggestions, setSuggestions] = useState<TSuggestion[] | null>(null);
  const [loading, setLoading] = useState(isLoading);

  const handleSuggestionChange = (r: SuggestionsFetchRequestedParams) => {
    if (r.reason === 'input-changed') {
      setLoading(true);
      setTimeout(() => {
        setSuggestions(allSuggestions);
        setLoading(false);
      }, 1000);
    }
  };

  const onSelect = (
    event: React.FormEvent,
    data: SuggestionSelectedEventData<TSuggestion>
  ) => {
    // eslint-disable-next-line no-alert
    alert(`Deine Auswahl: ${data.suggestion.title}`);
    setSuggestions([]);
  };

  return (
    <SearchBox<TSuggestion>
      width={width}
      variant={variant}
      onSelect={onSelect}
      handleSuggestionFetchRequested={handleSuggestionChange}
      handleSuggestionClearRequested={() => setSuggestions(null)}
      getSuggestionValue={s => s.title}
      suggestions={suggestions}
      renderSuggestion={s => <div>{s.title}</div>}
      isLoading={loading}
      placeholder={placeholderText}
    />
  );
};

export const defaultStory = () => (
  <SearchBoxWithData
    variant="red"
    width="auto"
    initialSuggestions={[]}
    isLoading={false}
  />
);

defaultStory.story = {
  name: 'Default'
};

export const lightStory = () => (
  <>
    <Section variant="secondary">
      <SearchBoxWithData
        variant="light"
        width="auto"
        initialSuggestions={[]}
        isLoading={false}
      />
    </Section>
    <Section variant="highlight">
      <SearchBoxWithData
        variant="light"
        width="auto"
        initialSuggestions={[]}
        isLoading={false}
      />
    </Section>
  </>
);

lightStory.story = {
  name: 'Helle Variante'
};

export const loadingStory = () => {
  return (
    <SearchBoxWithData
      variant="red"
      initialSuggestions={[]}
      width="auto"
      isLoading
    />
  );
};

loadingStory.story = {
  name: 'Ladend'
};

const SearchBoxWithNoData: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<TSuggestion[] | null>(null);

  const handleSuggestionChange = (r: SuggestionsFetchRequestedParams) => {
    if (r.reason === 'input-changed' && r.value.length > 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuggestions([]);
      }, 1000);
    }
  };

  return (
    <SearchBox<TSuggestion>
      width="auto"
      onSelect={() => {}}
      handleSuggestionFetchRequested={handleSuggestionChange}
      handleSuggestionClearRequested={() => setSuggestions(null)}
      getSuggestionValue={s => s.title}
      suggestions={suggestions}
      renderSuggestion={s => <div>{s.title}</div>}
      isLoading={loading}
      placeholder={placeholderText}
    />
  );
};

export const noResults = () => {
  return <SearchBoxWithNoData />;
};

noResults.story = {
  name: 'Ohne Treffer'
};

const SearchBoxWithCategorizedData: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<
    GroupedSuggestions<TSuggestion>[] | null
  >(null);

  const handleSuggestionChange = (r: SuggestionsFetchRequestedParams) => {
    if (r.reason === 'input-changed' && r.value.length > 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuggestions(categorizedSuggestions);
      }, 1000);
    }
  };

  return (
    <SearchBox<TSuggestion>
      width="auto"
      multiSection
      onSelect={() => {}}
      handleSuggestionFetchRequested={handleSuggestionChange}
      handleSuggestionClearRequested={() => setSuggestions(null)}
      getSuggestionValue={s => s.title}
      suggestions={suggestions}
      renderSuggestion={s => <div>{s.title}</div>}
      isLoading={loading}
      placeholder={placeholderText}
    />
  );
};

export const withCategorizedData = () => {
  return <SearchBoxWithCategorizedData />;
};

withCategorizedData.story = {
  name: 'Ergebnisse in Kategorien'
};

export const inHeaderStory = () => {
  return (
    <PageHeader>
      <SearchBoxWithData
        variant="red"
        initialSuggestions={[]}
        isLoading={false}
        width={[0.3, 0.5, 0.7]}
      />
      <Avatar src="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80" />
    </PageHeader>
  );
};

inHeaderStory.story = {
  name: 'Im Header'
};
