---
to: src/modules/<%= h.changeCase.pascal(name) %>Novo.js
sh: yarn eslint --fix src/modules/<%= h.changeCase.pascal(name) %>Novo.js
---
import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import <%= h.changeCase.pascal(name) %>Form from 'forms/<%= h.changeCase.pascal(name) %>Form';
import { useParams, useHistory } from 'react-router-dom';
import api from 'services/api';
import { toast } from 'react-toastify';

function <%= h.changeCase.pascal(name) %>Novo() {
  let { id } = useParams();
  const history = useHistory();
  const [<%= h.changeCase.camel(name) %>, set<%= h.changeCase.pascal(name) %>] = useState({});

  useEffect(() => {
    if (!id) return;

    async function get<%= h.changeCase.pascal(name) %>() {
      try {
        const { data } = await api.get(`<%= h.inflection.dasherize(name) %>/${id}`);
        set<%= h.changeCase.pascal(name) %>(data);
      } catch {
        history.push('/<%= h.inflection.dasherize(name) %>');
      }
    }

    get<%= h.changeCase.pascal(name) %>();
  }, [id, history]);

  const onSubmit = async values => {
    delete values.id;
    if (id) {
      await api.put(`<%= h.inflection.dasherize(name) %>/${id}`, values);
      toast.success('<%= title %> editado com sucesso!');
    } else {
      await api.post('<%= h.inflection.dasherize(name) %>', values);
      toast.success('<%= title %> cadastrado com sucesso!');
    }
    history.push('/<%= h.inflection.dasherize(name) %>');
  };

  return (
    <Container>
      <Paper>
        <Box p={2}>
          <<%= h.changeCase.pascal(name) %>Form onSubmit={onSubmit} initialValues={<%= h.changeCase.camel(name) %>} />
        </Box>
      </Paper>
    </Container>
  );
}

export default <%= h.changeCase.pascal(name) %>Novo;
